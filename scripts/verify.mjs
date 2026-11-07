/**
 * Verificação estática do portfólio (sem build):
 *  - arquivos obrigatórios presentes
 *  - chaves data-i18n existentes nos dois idiomas
 *  - ícones <use href="#i-..."> existentes no sprite inline
 *  - assets locais referenciados existentes
 *  - projetos completos e com categorias válidas
 *
 * Uso: node scripts/verify.mjs
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const web = path.join(root, "web");
const errors = [];

const exists = (file) => fs.existsSync(path.join(web, file));

const required = [
  "index.html",
  "robots.txt",
  "assets/css/styles.css",
  "assets/js/data.js",
  "assets/js/i18n.js",
  "assets/js/main.js",
  "assets/img/favicon.svg",
];

for (const file of required) {
  if (!exists(file)) errors.push(`arquivo ausente: web/${file}`);
}

const html = fs.readFileSync(path.join(web, "index.html"), "utf8");

for (const key of new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1]))) {
  if (!new RegExp(`"${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"\\s*:`).test(fs.readFileSync(path.join(web, "assets/js/i18n.js"), "utf8"))) {
    errors.push(`data-i18n sem tradução: ${key}`);
  }
}

const symbolIds = new Set([...html.matchAll(/<symbol[^>]*id="([^"]+)"/g)].map((m) => m[1]));
for (const id of new Set([...html.matchAll(/<use href="#([^"]+)"/g)].map((m) => m[1]))) {
  if (!symbolIds.has(id)) errors.push(`ícone ausente no sprite: #${id}`);
}

for (const ref of new Set([...html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)].map((m) => m[1]))) {
  if (!exists(ref)) errors.push(`asset referenciado não existe: web/${ref}`);
}

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(web, "assets/js/data.js"), "utf8"), sandbox);
vm.runInNewContext(fs.readFileSync(path.join(web, "assets/js/i18n.js"), "utf8"), sandbox);

const projects = sandbox.window.PORTFOLIO_PROJECTS;
const dict = sandbox.window.PORTFOLIO_I18N;

if (!Array.isArray(projects) || projects.length === 0) {
  errors.push("PORTFOLIO_PROJECTS vazio ou inválido");
} else {
  const seen = new Set();
  for (const project of projects) {
    if (!project.id) errors.push("projeto sem id");
    if (seen.has(project.id)) errors.push(`projeto duplicado: ${project.id}`);
    seen.add(project.id);
    for (const lang of ["pt", "en"]) {
      if (!project.title?.[lang]) errors.push(`${project.id}: title.${lang} ausente`);
      if (!project.description?.[lang]) errors.push(`${project.id}: description.${lang} ausente`);
    }
    if (!Array.isArray(project.tags) || project.tags.length === 0) errors.push(`${project.id}: tags vazias`);
    if (!Array.isArray(project.categories) || project.categories.length === 0) {
      errors.push(`${project.id}: categories vazias`);
    } else {
      for (const category of project.categories) {
        if (!["web", "mobile", "backend"].includes(category)) {
          errors.push(`${project.id}: categoria inválida "${category}"`);
        }
      }
    }
    if (project.icon && !symbolIds.has(`i-${project.icon}`)) {
      errors.push(`${project.id}: ícone "${project.icon}" não existe no sprite`);
    }
  }
}

for (const lang of ["pt", "en"]) {
  if (!dict?.[lang] || Object.keys(dict[lang]).length === 0) errors.push(`dicionário ausente: ${lang}`);
}

if (errors.length) {
  console.error(`Falha na verificação (${errors.length}):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`OK — ${projects.length} projetos, ${Object.keys(dict.pt).length} chaves pt / ${Object.keys(dict.en).length} chaves en.`);
