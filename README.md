# Aruan Silva

Engenheiro de Software | Software Engineer

🌐 **[Visite meu site / Visit my website](https://aruan-silva.github.io)**

---

## ✏️ Guia de Edição / Editing Guide

### Estrutura de Arquivos / File Structure

```
├── index.html                    ← Página principal / Main page
├── style.css                     ← Estilos / Styles
├── script.js                     ← Interações / Interactions
├── images/
│   ├── profile-picture.jpeg      ← Sua foto / Your photo
│   └── logos/                    ← Logos das empresas / Company logos
├── blog/
│   ├── post-1.html               ← Artigo 1 / Article 1
│   ├── post-2.html               ← Artigo 2 / Article 2
│   └── post-3.html               ← Artigo 3 / Article 3
├── projects/
│   ├── project-1.html            ← Projeto 1 / Project 1
│   ├── project-2.html            ← Projeto 2 / Project 2
│   └── ...
└── README.md
```

---

### 📝 Editando Textos / Editing Texts

Todos os textos têm duas versões (PT e EN). Use os atributos `data-pt` e `data-en`:

```html
<p data-pt="Texto em português" data-en="Text in English">
  Texto em português
</p>
```

---

### 👤 Foto de Perfil / Profile Picture

Substitua o arquivo `images/profile-picture.jpeg` pela sua foto.

---

### 📅 Timeline / Experiência

No `index.html`, encontre a seção `timeline` (~linha 90):

```html
<div class="timeline-item" data-year="2022">
  <div class="timeline-marker">
    <img src="images/logos/company-logo.png" alt="Company" class="timeline-logo">
  </div>
  <div class="timeline-content">
    <span class="timeline-year">2022</span>
    <h3>Senior Software Engineer</h3>
    <p>Nome da Empresa</p>
  </div>
</div>
```

**Para adicionar logo:** Coloque a imagem em `images/logos/` e atualize o `src`.

---

### 📊 Projetos de Dados / Data Projects

Cada projeto tem sua própria página em `projects/`. Para criar um novo:

1. Copie um arquivo existente (ex: `project-1.html`)
2. Renomeie (ex: `project-4.html`)
3. Edite o conteúdo
4. Adicione o link no `index.html`:

```html
<a href="projects/project-4.html" class="portfolio-card">
  ...
</a>
```

**Para embeds de dashboards**, adicione no conteúdo do projeto:

```html
<div class="embed-container">
  <iframe src="URL_DO_DASHBOARD" frameborder="0"></iframe>
</div>
```

---

### 📰 Artigos / Articles

Artigos estão em `blog/`. Para criar um novo:

1. Copie um arquivo existente
2. Renomeie
3. Edite o conteúdo (lembre-se dos atributos `data-pt` e `data-en`)
4. Adicione o link no `index.html`

---

### 🔗 Links Externos / Other Projects

No `index.html`, seção `other-projects` (~linha 200):

```html
<a href="https://seusite.com" target="_blank" class="external-link-card">
  <h3>Nome do Projeto</h3>
  <p data-pt="Descrição" data-en="Description">Descrição</p>
  <span class="external-link-url">seusite.com</span>
</a>
```

---

### 📞 Contato / Contact

Atualize no `index.html`, seção `contact` (~linha 250):

- **Email:** `href="mailto:seu@email.com"`
- **LinkedIn:** `href="https://linkedin.com/in/seu-perfil"`
- **WhatsApp:** `href="https://wa.me/5511999999999"` (use seu número com código do país)

---

### 🎨 Cores / Colors

No `style.css`, linha ~6:

```css
--color-primary: #0066ff;  /* Cor de destaque */
```

---

### 🚀 Publicando Atualizações / Publishing Updates

```bash
git add .
git commit -m "Descrição da atualização"
git push
```

As mudanças aparecem em ~1 minuto.
