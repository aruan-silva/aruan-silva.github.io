# Guia de Edição do Site | Site Editing Guide

Este arquivo contém instruções para editar o conteúdo do site.

This file contains instructions for editing the site content.

---

## 📁 Estrutura de Arquivos | File Structure

```
├── index.html          # Página principal
├── style.css           # Estilos CSS
├── script.js           # JavaScript
├── blog/               # Artigos
│   ├── post-1.html
│   ├── post-2.html
│   └── post-3.html
├── projects/           # Projetos de Dados
│   ├── project-1.html
│   └── ...
├── courses/            # Mini-Cursos
│   ├── statistics-101.html
│   └── ...
└── images/             # Imagens
    ├── profile-picture.jpeg
    └── clients/
```

---

## ✏️ Editando Textos | Editing Text

### Textos Bilíngues | Bilingual Text

Os textos possuem atributos `data-pt` (português) e `data-en` (inglês):

```html
<p data-pt="Texto em português" data-en="Text in English">
  Texto em português
</p>
```

**Importante:** Edite tanto o conteúdo visível quanto os atributos `data-pt` e `data-en`.

---

## 👤 Informações Pessoais | Personal Info

### Foto de Perfil | Profile Picture
Substitua o arquivo `images/profile-picture.jpeg`.

### Bio e Título | Bio & Title
Edite no arquivo `index.html`:
- Título: tag `<title>` e classe `.hero-name`
- Bio: classe `.hero-intro`
- Sobre: seção `#about`

### Contato | Contact
Edite na seção `#contact` do `index.html`:
- Email: `href="mailto:seu@email.com"`
- LinkedIn: `href="https://linkedin.com/in/seu-usuario"`
- WhatsApp: `href="https://wa.me/5548999999999"`

---

## 📊 Projetos de Dados | Data Projects

### Adicionar Projeto | Add Project

1. Duplique um arquivo em `projects/` (ex: `project-1.html`)
2. Renomeie para `project-7.html`
3. Edite o conteúdo do arquivo
4. Adicione o card **no início** da seção `#data-projects` do `index.html` (o primeiro é o destaque):

```html
<a href="projects/project-7.html" class="portfolio-card">
  <div class="portfolio-image">
    <div class="portfolio-placeholder gradient-1">
      <!-- SVG icon -->
    </div>
  </div>
  <div class="portfolio-info">
    <h3>Nome do Projeto</h3>
    <p data-pt="Descrição" data-en="Description">Descrição</p>
  </div>
</a>
```

5. Atualize a sidebar dos outros projetos

**Regra:** O primeiro projeto no grid é sempre considerado o destaque/mais recente.

### Gradientes Disponíveis | Available Gradients
`gradient-1` a `gradient-6` (roxo, rosa, azul, verde, laranja, pastel)

---

## 📝 Artigos | Articles

### Adicionar Artigo | Add Article

1. Duplique um arquivo em `blog/` (ex: `post-1.html`)
2. Renomeie para `post-4.html`
3. Edite o conteúdo
4. Adicione na página `articles.html`:
   - **Destaque**: Atualize a seção `articles-featured` com o novo artigo
   - **Grid**: Adicione o card **no topo** da `articles-grid` (o primeiro é sempre o mais recente)

```html
<a href="blog/post-4.html" class="article-card" data-category="career">
  <div class="article-card-image">
    <div class="article-placeholder gradient-1"><!-- SVG --></div>
  </div>
  <div class="article-card-content">
    <span class="article-category" data-pt="Carreira" data-en="Career">Carreira</span>
    <h3 data-pt="Título" data-en="Title">Título</h3>
    <p data-pt="Descrição" data-en="Description">Descrição</p>
    <time datetime="2025-01-15" data-pt="Jan 2025" data-en="Jan 2025">Jan 2025</time>
  </div>
</a>
```

5. Atualize também a seção `#articles` no `index.html` (preview com 3 artigos)
6. Atualize a sidebar dos outros artigos

### Categorias Disponíveis | Available Categories
- `career` - Carreira
- `data` - Dados
- `business` - Negócios
- `tech` - Tecnologia

---

## 🎓 Mini-Cursos | Mini-Courses

### Adicionar Curso | Add Course

1. Duplique um arquivo em `courses/` (ex: `statistics-101.html`)
2. Renomeie (ex: `machine-learning.html`)
3. Edite o conteúdo e seções
4. Adicione o card **no início** da seção `#mini-courses` do `index.html` (o primeiro é o destaque):

```html
<a href="courses/novo-curso.html" class="course-card">
  <div class="course-image">
    <div class="course-placeholder gradient-1"><!-- SVG --></div>
  </div>
  <div class="course-info">
    <span class="course-tag" data-pt="Categoria" data-en="Category">Categoria</span>
    <h3 data-pt="Nome do Curso" data-en="Course Name">Nome do Curso</h3>
    <p data-pt="Descrição" data-en="Description">Descrição</p>
    <span class="course-meta" data-pt="X aulas • Yh" data-en="X lessons • Yh">X aulas • Yh</span>
  </div>
</a>
```

5. Atualize a sidebar dos outros cursos

**Regra:** O primeiro curso no grid é sempre considerado o destaque/mais recente.

### Adicionar Vídeo do YouTube | Add YouTube Video

```html
<div class="video-container">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
</div>
```

Substitua `VIDEO_ID` pelo ID do vídeo (ex: `dQw4w9WgXcQ`).

---

## 🏢 Empresas | Companies

### Adicionar Logo | Add Logo

Na seção `.clients-row` do `index.html`:

```html
<div class="client-logo">
  <img src="https://url-do-logo.svg" alt="Nome da Empresa">
</div>
```

**Dica:** Use SVGs de sites oficiais ou Wikimedia Commons.

---

## 📄 Currículo / Resume (PDF)

O site permite download do currículo em inglês e português. Os arquivos ficam na pasta `files/`:

- `files/resume-en.pdf` - Currículo em inglês
- `files/resume-pt.pdf` - Currículo em português

Para atualizar, simplesmente substitua os arquivos PDF mantendo os mesmos nomes.

**Locais onde aparece:**
- Menu de navegação (dropdown)
- Seção hero da página inicial
- Seção de contato

---

## 📅 Timeline

Edite a seção `.timeline` no `index.html`:

### Posições Principais (círculos grandes)

```html
<div class="timeline-item">
  <span class="timeline-year">2025</span>
  <div class="timeline-marker"></div>
  <div class="timeline-content">
    <h3 data-pt="Cargo" data-en="Job Title">Cargo</h3>
    <p>Empresa</p>
  </div>
</div>
```

Para o item atual, adicione a classe `timeline-now`.

### Marcos/Milestones (círculos menores entre anos)

Use milestones para destacar conquistas menores entre os anos principais (ex: formatura, certificações, cursos):

```html
<div class="timeline-milestone">
  <div class="milestone-marker"></div>
  <div class="milestone-content">
    <span data-pt="MBA Data Science" data-en="MBA Data Science">MBA Data Science</span>
  </div>
</div>
```

**Dica:** Posicione os milestones entre os `timeline-item` onde fizer sentido cronologicamente.

---

## 🚀 Publicando Alterações | Publishing Changes

```bash
git add .
git commit -m "Descrição das alterações"
git push
```

As alterações estarão no ar em 1-2 minutos.

---

## 🎨 Personalizações Avançadas | Advanced Customizations

### Cores | Colors
Edite as variáveis CSS em `style.css`:

```css
:root {
  --color-primary: #0066ff;
  --color-text: #1a1a1a;
  /* ... */
}
```

### Fontes | Fonts
A fonte atual é **Plus Jakarta Sans**. Para trocar, edite o link do Google Fonts no `<head>` de cada HTML.

