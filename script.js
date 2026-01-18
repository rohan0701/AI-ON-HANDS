// AI Tools Hub - Main JavaScript

class AIToolsHub {
  constructor() {
    this.tools = [
      {id:1,name:"ChatGPT",category:"Text & Chat",pricing:"Freemium",description:"OpenAI's flagship conversational AI with advanced reasoning capabilities.",features:["GPT-4o","Custom GPTs","Canvas mode","Voice conversations","Image analysis"],url:"https://chatgpt.com",icon:"💬",rating:4.9},
      {id:2,name:"Midjourney",category:"Image Generation",pricing:"Paid",description:"Premium AI art generator accessible via Discord.",features:["V6 Model","Pan & Zoom","Remix mode","Style references","High resolution"],url:"https://midjourney.com",icon:"🎨",rating:4.8},
      {id:3,name:"Canva Magic Studio",category:"Design",pricing:"Freemium",description:"AI-powered design tools integrated into Canva.",features:["Magic Design","Background Remover","Text to Image","Brand Kit","Templates"],url:"https://canva.com/magic",icon:"✨",rating:4.7},
      {id:4,name:"Claude",category:"Text & Chat",pricing:"Freemium",description:"Anthropic's safe and helpful AI assistant.",features:["Projects","Artifacts","Deep analysis","Document processing","Code assistance"],url:"https://claude.ai",icon:"🤖",rating:4.8},
      {id:5,name:"Gemini",category:"Multimodal",pricing:"Freemium",description:"Google's advanced multimodal AI system.",features:["1.5 Pro","Flash model","Extensions","Workspace integration","Multi-turn conversations"],url:"https://gemini.google.com",icon:"🌐",rating:4.6},
      {id:6,name:"Perplexity",category:"Search",pricing:"Freemium",description:"AI-powered search with real-time citations.",features:["Pro Search","Collections","Focus modes","API access","Source citations"],url:"https://perplexity.ai",icon:"🔍",rating:4.9},
      {id:7,name:"Runway ML",category:"Video",pricing:"Freemium",description:"Professional AI video generation and editing.",features:["Gen-3 Alpha","Text-to-Video","Video upscaling","Motion tracking","Green screen"],url:"https://runwayml.com",icon:"🎥",rating:4.7},
      {id:8,name:"ElevenLabs",category:"Voice",pricing:"Freemium",description:"Realistic AI voice generation and cloning.",features:["Voice Cloning","29+ languages","Emotion control","Speech synthesis","API access"],url:"https://elevenlabs.io",icon:"🎙️",rating:4.9},
      {id:9,name:"Copilot",category:"Productivity",pricing:"Freemium",description:"Microsoft's AI integrated across Office suite.",features:["PowerPoint generation","Excel formulas","Word editing","Teams integration","Data analysis"],url:"https://copilot.microsoft.com",icon:"📊",rating:4.7},
      {id:10,name:"Notion AI",category:"Productivity",pricing:"Freemium",description:"AI features built into Notion workspace.",features:["Q&A","Writing Assistant","Summaries","Translations","Action items"],url:"https://notion.so",icon:"📝",rating:4.6},
      {id:11,name:"Tome",category:"Presentations",pricing:"Freemium",description:"AI storytelling and presentation builder.",features:["Narrative Builder","Auto-layout","Image generation","Themes","Collaboration"],url:"https://tome.app",icon:"📈",rating:4.8},
      {id:12,name:"Gamma",category:"Presentations",pricing:"Freemium",description:"Create stunning presentations with AI.",features:["One-click creation","Analytics","Templates","Collaboration","Export options"],url:"https://gamma.app",icon:"📊",rating:4.7},
      {id:13,name:"Pitch",category:"Presentations",pricing:"Freemium",description:"AI pitch deck creator for teams.",features:["Real-time collaboration","Smart templates","Presenter mode","Analytics","Video recording"],url:"https://pitch.com",icon:"🎯",rating:4.6},
      {id:14,name:"SlidesAI",category:"Presentations",pricing:"Freemium",description:"Google Slides AI extension.",features:["Text-to-Slides","Customization","Templates","Auto-formatting","Quick generation"],url:"https://slidesai.io",icon:"💻",rating:4.5},
      {id:15,name:"Beautiful.ai",category:"Presentations",pricing:"Freemium",description:"Smart slide templates with AI.",features:["Adaptive layouts","Smart charts","Team library","Brand consistency","Collaboration"],url:"https://beautiful.ai",icon:"✨",rating:4.6},
      {id:16,name:"Jasper AI",category:"Writing",pricing:"Paid",description:"AI writing assistant for marketing.",features:["Brand Voice","50+ Templates","SEO mode","Plagiarism checker","Team collaboration"],url:"https://jasper.ai",icon:"✍️",rating:4.5},
      {id:17,name:"Copy.ai",category:"Writing",pricing:"Freemium",description:"Marketing copy generator.",features:["Workflows","A/B Testing","Templates","Team access","Multilingual"],url:"https://copy.ai",icon:"📄",rating:4.4},
      {id:18,name:"Anyword",category:"Writing",pricing:"Paid",description:"Predictive copywriting platform.",features:["Performance Prediction","SEO optimization","Brand guidelines","Analytics","Copy intelligence"],url:"https://anyword.com",icon:"📈",rating:4.6},
      {id:19,name:"Writesonic",category:"Writing",pricing:"Freemium",description:"AI content platform.",features:["ChatSonic","Botsonic","Article writer","SEO checker","Bulk generation"],url:"https://writesonic.com",icon:"🖋️",rating:4.5},
      {id:20,name:"Rytr",category:"Writing",pricing:"Freemium",description:"Affordable AI writer.",features:["40+ Use Cases","SEO analyzer","Plagiarism check","Tone control","Chrome extension"],url:"https://rytr.me",icon:"📝",rating:4.4},
      {id:21,name:"Otter.ai",category:"Meeting Notes",pricing:"Freemium",description:"AI meeting transcription.",features:["Real-time notes","Speaker identification","Action items","Integration","Search"],url:"https://otter.ai",icon:"🎤",rating:4.7},
      {id:22,name:"Fireflies.ai",category:"Meeting Notes",pricing:"Freemium",description:"AI meeting assistant.",features:["Auto-join","Searchable notes","CRM integration","Analytics","Conversation intelligence"],url:"https://fireflies.ai",icon:"🔥",rating:4.6},
      {id:23,name:"Descript",category:"Video",pricing:"Freemium",description:"AI video and audio editor.",features:["Overdub","Screen recording","Transcription","Studio sound","Multi-track"],url:"https://descript.com",icon:"🎬",rating:4.8},
      {id:24,name:"Synthesia",category:"Video",pricing:"Paid",description:"AI video avatars platform.",features:["100+ Avatars","Multilingual","Custom avatars","Screen recorder","Templates"],url:"https://synthesia.io",icon:"🤵",rating:4.7},
      {id:25,name:"HeyGen",category:"Video",pricing:"Freemium",description:"AI video generation tool.",features:["Talking avatars","Lip sync","Video translation","Templates","API access"],url:"https://heygen.com",icon:"🎥",rating:4.8},
      {id:26,name:"Character.ai",category:"Chatbots",pricing:"Freemium",description:"Create AI characters.",features:["Custom characters","Roleplay","Memory","Voice chat","Community"],url:"https://character.ai",icon:"👤",rating:4.7},
      {id:27,name:"Poe",category:"Chatbots",pricing:"Freemium",description:"Multi-model chatbot platform.",features:["Model switching","Custom bots","Bot creation","API","Multiple AI access"],url:"https://poe.com",icon:"📱",rating:4.6},
      {id:28,name:"Remove.bg",category:"Design",pricing:"Freemium",description:"AI background removal.",features:["Batch processing","API access","High resolution","Auto-detection","Instant results"],url:"https://remove.bg",icon:"🗑️",rating:4.9},
      {id:29,name:"Framer AI",category:"Design",pricing:"Freemium",description:"AI website builder.",features:["Canvas generation","Components","Responsive","CMS","Hosting"],url:"https://framer.com/ai",icon:"🖥️",rating:4.8},
      {id:30,name:"Uizard",category:"Design",pricing:"Freemium",description:"Design to code tool.",features:["Screenshot to design","Wireframes","Prototypes","Collaboration","Export code"],url:"https://uizard.io",icon:"🪄",rating:4.7},
      {id:31,name:"AdCreative.ai",category:"Marketing",pricing:"Paid",description:"AI ad creatives generator.",features:["Performance scoring","Variations","Text generation","Brand assets","Integration"],url:"https://adcreative.ai",icon:"📣",rating:4.7},
      {id:32,name:"Cursor",category:"Code",pricing:"Freemium",description:"AI code editor.",features:["Composer","Chat assistance","Tab completion","Debugging","Multi-file editing"],url:"https://cursor.com",icon:"💻",rating:4.9},
      {id:33,name:"GitHub Copilot",category:"Code",pricing:"Paid",description:"AI pair programmer.",features:["Autocomplete","Chat","Workspace","CLI","Multi-language"],url:"https://github.com/features/copilot",icon:"🐙",rating:4.8},
      {id:34,name:"Codeium",category:"Code",pricing:"Free",description:"Free AI coding assistant.",features:["100+ Languages","Local models","Chat","Search","Context-aware"],url:"https://codeium.com",icon:"⚡",rating:4.7},
      {id:35,name:"Replit Ghostwriter",category:"Code",pricing:"Freemium",description:"AI in Replit IDE.",features:["Code explanation","Debugging","Generation","Chat","Completion"],url:"https://replit.com",icon:"🔮",rating:4.6},
      {id:36,name:"Murf.ai",category:"Voice",pricing:"Freemium",description:"Studio-quality AI voices.",features:["Emotion control","API access","120+ voices","Pitch control","Video sync"],url:"https://murf.ai",icon:"🎤",rating:4.7},
      {id:37,name:"Speechify",category:"Voice",pricing:"Freemium",description:"Text-to-speech tool.",features:["Natural voices","Speed control","Highlighting","Multi-format","Mobile apps"],url:"https://speechify.com",icon:"🔊",rating:4.6},
      {id:38,name:"Bubble",category:"No-Code",pricing:"Freemium",description:"Visual web app builder.",features:["AI toolkit","Database","Workflows","Responsive","Plugins"],url:"https://bubble.io",icon:"🫧",rating:4.5},
      {id:39,name:"Webflow AI",category:"No-Code",pricing:"Freemium",description:"AI website generator.",features:["Site builder","CMS","Hosting","E-commerce","Interactions"],url:"https://webflow.com",icon:"🌐",rating:4.8},
      {id:40,name:"V0 by Vercel",category:"No-Code",pricing:"Free",description:"AI UI generator.",features:["React components","shadcn/ui","Customization","Copy code","Iterations"],url:"https://v0.dev",icon:"⚡",rating:4.9},
      {id:41,name:"Fliki",category:"Video",pricing:"Freemium",description:"Text-to-video platform.",features:["Blog to video","AI Voiceovers","Stock media","Subtitles","Templates"],url:"https://fliki.ai",icon:"📹",rating:4.5},
      {id:42,name:"InVideo",category:"Video",pricing:"Freemium",description:"AI video editor.",features:["Templates","Stock media","Text overlays","Transitions","Export options"],url:"https://invideo.io",icon:"🎞️",rating:4.6},
      {id:43,name:"Colossyan",category:"Video",pricing:"Paid",description:"Enterprise AI video platform.",features:["Custom avatars","API","Localization","Templates","Collaboration"],url:"https://colossyan.com",icon:"🏢",rating:4.6},
      {id:44,name:"TweetHunter",category:"Marketing",pricing:"Paid",description:"Twitter growth AI tool.",features:["Thread generator","Scheduler","Analytics","CRM","Inspiration"],url:"https://tweethunter.io",icon:"🐦",rating:4.6},
      {id:45,name:"Typefully",category:"Marketing",pricing:"Freemium",description:"Twitter writing tool.",features:["Analytics","Scheduling","Drafts","Collaboration","Cross-posting"],url:"https://typefully.com",icon:"📝",rating:4.5},
      {id:46,name:"Lex",category:"Design",pricing:"Freemium",description:"AI design assistant.",features:["UI Generation","Prototyping","Components","Export","Collaboration"],url:"https://lex.design",icon:"🎨",rating:4.6},
      {id:47,name:"Krutrim",category:"Meeting Notes",pricing:"Freemium",description:"Indian AI meeting tool.",features:["Multilingual","Transcription","Summaries","Action items","Local support"],url:"https://krutrim.com",icon:"🇮🇳",rating:4.4},
      {id:48,name:"MeetGeek",category:"Meeting Notes",pricing:"Freemium",description:"AI meeting recorder and analyzer.",features:["Auto-recording","Highlights","Integration","Search","Teams"],url:"https://meetgeek.ai",icon:"📋",rating:4.5}
    ];
    
    this.filteredTools = [...this.tools];
    this.currentCategory = '';
    this.currentView = 'grid';
    this.searchQuery = '';
    this.favorites = this.loadFavorites();
    this.currentSort = 'default';
    this.currentToolInModal = null;
    this.currentTheme = this.loadTheme();
    
    this.init();
  }

  // Initialize the application
  init() {
    this.applyTheme(this.currentTheme);
    this.startLoader();
    this.bindEvents();
    this.createFloatingIcons();
    
    setTimeout(() => {
      this.loaderComplete();
      this.renderCategories();
      this.renderTools();
      this.updateStats();
      this.updateFavoriteCount();
    }, 1800);
  }

  // Load theme from localStorage
  loadTheme() {
    try {
      const saved = localStorage.getItem('ai_tools_theme');
      return saved || 'light';
    } catch (e) {
      return 'light';
    }
  }

  // Save theme to localStorage
  saveTheme(theme) {
    try {
      localStorage.setItem('ai_tools_theme', theme);
    } catch (e) {
      console.error('Failed to save theme');
    }
  }

  // Apply theme to document
  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme = theme;
  }

  // Toggle theme between light and dark
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
    this.saveTheme(newTheme);
    this.showToast(newTheme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled');
  }

  // Load favorites from localStorage
  loadFavorites() {
    try {
      const saved = localStorage.getItem('ai_tools_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  // Save favorites to localStorage
  saveFavorites() {
    try {
      localStorage.setItem('ai_tools_favorites', JSON.stringify(this.favorites));
    } catch (e) {
      console.error('Failed to save favorites');
    }
  }

  // Toggle favorite status
  toggleFavorite(toolId) {
    const index = this.favorites.indexOf(toolId);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.showToast('Removed from favorites');
    } else {
      this.favorites.push(toolId);
      this.showToast('Added to favorites');
    }
    this.saveFavorites();
    this.updateFavoriteCount();
    this.renderTools();
  }

  // Check if tool is favorite
  isFavorite(toolId) {
    return this.favorites.includes(toolId);
  }

  // Update favorite count display
  updateFavoriteCount() {
    document.getElementById('favoriteCount').textContent = this.favorites.length;
  }

  // Start the loading animation
  startLoader() {
    let progress = 10;
    const loaderFill = document.getElementById('loaderFill');
    const loaderPercent = document.getElementById('loaderPercent');
    
    const interval = setInterval(() => {
      progress += Math.random() * 8 + 2;
      if (progress >= 98) {
        progress = 98;
        clearInterval(interval);
      }
      loaderFill.style.width = `${progress}%`;
      loaderPercent.textContent = `${Math.floor(progress)}%`;
    }, 120);
  }

  // Complete loader and remove it
  loaderComplete() {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 500);
  }

  // Bind all event listeners
  bindEvents() {
    const searchInput = document.getElementById('searchInput');
    const pricingFilter = document.getElementById('pricingFilter');
    const sortSelect = document.getElementById('sortSelect');
    const scrollTop = document.getElementById('scrollTop');
    const modalClose = document.querySelector('.modal-close');
    const favoritesBtn = document.getElementById('favoritesBtn');
    const themeToggle = document.getElementById('themeToggle');
    
    searchInput.addEventListener('input', this.debounce(this.handleSearch.bind(this), 300));
    pricingFilter.addEventListener('change', this.filterTools.bind(this));
    sortSelect.addEventListener('change', this.handleSort.bind(this));
    
    // Theme toggle button
    themeToggle.addEventListener('click', () => this.toggleTheme());
    
    // View toggle buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        this.currentView = e.target.dataset.view;
        this.updateView();
      });
    });
    
    // Modal overlay click
    document.getElementById('modalOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'modalOverlay') this.closeModal();
    });
    
    // Modal buttons
    modalClose.addEventListener('click', () => this.closeModal());
    
    document.getElementById('modalShareBtn').addEventListener('click', () => this.shareCurrentTool());
    document.getElementById('modalFavoriteBtn').addEventListener('click', () => {
      if (this.currentToolInModal) {
        this.toggleFavorite(this.currentToolInModal.id);
        this.updateModalFavoriteButton();
      }
    });
    
    // Scroll to top button
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTop.classList.add('show');
      } else {
        scrollTop.classList.remove('show');
      }
    });
    
    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Favorites button
    favoritesBtn.addEventListener('click', () => {
      if (this.currentCategory === 'favorites') {
        this.currentCategory = '';
        this.filterTools();
      } else {
        this.showFavoritesOnly();
      }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.getElementById('modalOverlay').classList.contains('active')) {
        this.closeModal();
      }
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        searchInput.focus();
      }
      // Theme toggle shortcut (Ctrl/Cmd + Shift + D)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        this.toggleTheme();
      }
    });
  }

  // Debounce utility function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Create floating background icons
  createFloatingIcons() {
    const icons = ['🤖','🧠','⚙️','💻','✨','🚀','🔮','🎨','💬','🔍'];
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
    
    icons.forEach((icon, i) => {
      const span = document.createElement('span');
      span.textContent = icon;
      span.style.cssText = `position:absolute;font-size:${2 + i%3}rem;opacity:0.06;left:${Math.random()*90}%;animation:float ${20 + i*3}s linear infinite;animation-delay:${i*0.5}s;`;
      container.appendChild(span);
    });
    
    document.body.appendChild(container);
  }

  // Render category buttons
  renderCategories() {
    const categories = ['All', ...new Set(this.tools.map(tool => tool.category))];
    const container = document.getElementById('categoryFilter');
    
    container.innerHTML = categories.map(cat => {
      const count = cat === 'All' ? this.tools.length : this.tools.filter(t => t.category === cat).length;
      return `
        <button class="category-btn ${cat === 'All' ? 'active' : ''}" 
                data-category="${cat === 'All' ? '' : cat}">
          ${cat}<span class="category-count">${count}</span>
        </button>
      `;
    }).join('');

    container.addEventListener('click', (e) => {
      if (e.target.classList.contains('category-btn') || e.target.closest('.category-btn')) {
        const btn = e.target.classList.contains('category-btn') ? e.target : e.target.closest('.category-btn');
        this.setActiveCategory(btn.dataset.category);
      }
    });
  }

  // Set active category
  setActiveCategory(category) {
    this.currentCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });
    this.filterTools();
  }

  // Handle search input
  handleSearch(e) {
    this.searchQuery = e.target.value.toLowerCase();
    this.filterTools();
  }

  // Handle sort change
  handleSort(e) {
    this.currentSort = e.target.value;
    this.filterTools();
  }

  // Show only favorites
  showFavoritesOnly() {
    this.currentCategory = 'favorites';
    this.filteredTools = this.tools.filter(tool => this.isFavorite(tool.id));
    this.renderTools();
    this.updateStats();
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
  }

  // Filter tools based on criteria
  filterTools() {
    const pricing = document.getElementById('pricingFilter').value;
    
    this.filteredTools = this.tools.filter(tool => {
      const matchesSearch = !this.searchQuery || 
        tool.name.toLowerCase().includes(this.searchQuery) ||
        tool.description.toLowerCase().includes(this.searchQuery) ||
        tool.category.toLowerCase().includes(this.searchQuery) ||
        tool.features.some(f => f.toLowerCase().includes(this.searchQuery));
      
      const matchesPricing = !pricing || tool.pricing === pricing;
      const matchesCategory = !this.currentCategory || this.currentCategory === 'favorites' || tool.category === this.currentCategory;
      
      if (this.currentCategory === 'favorites') {
        return this.isFavorite(tool.id) && matchesSearch && matchesPricing;
      }
      
      return matchesSearch && matchesPricing && matchesCategory;
    });
    
    this.sortTools();
    this.renderTools();
    this.updateStats();
  }

  // Sort tools based on selected criteria
  sortTools() {
    switch(this.currentSort) {
      case 'name':
        this.filteredTools.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        this.filteredTools.sort((a, b) => b.rating - a.rating);
        break;
      case 'category':
        this.filteredTools.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'pricing':
        this.filteredTools.sort((a, b) => a.pricing.localeCompare(b.pricing));
        break;
    }
  }

  // Update view layout
  updateView() {
    const grid = document.getElementById('toolsGrid');
    grid.className = 'tools-grid';
    
    if (this.currentView === 'list') {
      grid.classList.add('list-view');
    } else if (this.currentView === 'compact') {
      grid.classList.add('compact-view');
    }
    
    this.renderTools();
  }

  // Render all tools
  renderTools() {
    const container = document.getElementById('toolsGrid');
    container.className = 'tools-grid';
    
    if (this.currentView === 'list') {
      container.classList.add('list-view');
    } else if (this.currentView === 'compact') {
      container.classList.add('compact-view');
    }
    
    if (this.filteredTools.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <div class="empty-state-title">No tools found</div>
          <div class="empty-state-text">Try adjusting your search or filters</div>
        </div>
      `;
      return;
    }
    
    const fragment = document.createDocumentFragment();
    
    this.filteredTools.forEach((tool, index) => {
      const card = this.createToolCard(tool, index);
      fragment.appendChild(card);
    });
    
    container.innerHTML = '';
    container.appendChild(fragment);
    
    // Trigger fade-in animation
    setTimeout(() => {
      this.filteredTools.forEach((_, index) => {
        const card = container.children[index];
        if (card) card.style.opacity = '1';
      });
    }, 50);
  }

  // Create a single tool card
  createToolCard(tool, index) {
    const div = document.createElement('div');
    div.className = 'tool-card';
    div.style.animationDelay = `${index * 0.05}s`;
    
    if (this.currentView === 'list') {
      div.classList.add('list-view-card');
    } else if (this.currentView === 'compact') {
      div.classList.add('compact-view-card');
    }
    
    const stars = '★'.repeat(Math.floor(tool.rating)) + (tool.rating % 1 >= 0.5 ? '½' : '');
    const isFav = this.isFavorite(tool.id);
    
    div.innerHTML = `
      <button class="favorite-btn ${isFav ? 'active' : ''}" data-tool-id="${tool.id}">
        ${isFav ? '❤️' : '🤍'}
      </button>
      <div class="card-header">
        <div class="card-icon">${tool.icon}</div>
        <div class="card-content">
          <h3>${tool.name}</h3>
          <p class="card-description">${tool.description}</p>
          <div class="card-rating">
            <span class="stars">${stars}</span>
            <span class="rating-value">${tool.rating}</span>
          </div>
        </div>
      </div>
      <div class="card-meta">
        <span class="tag tag-category">${tool.category}</span>
        <span class="tag tag-pricing">${tool.pricing}</span>
        <span class="tag tag-features">${tool.features.length} Features</span>
      </div>
    `;
    
    // Card click event
    div.addEventListener('click', (e) => {
      if (!e.target.closest('.favorite-btn')) {
        this.openModal(tool);
      }
    });
    
    // Favorite button click event
    div.querySelector('.favorite-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggleFavorite(tool.id);
    });
    
    return div;
  }

  // Open tool details modal
  openModal(tool) {
    this.currentToolInModal = tool;
    const stars = '★'.repeat(Math.floor(tool.rating)) + (tool.rating % 1 >= 0.5 ? '½' : '');
    
    document.getElementById('modalIcon').textContent = tool.icon;
    document.getElementById('modalTitle').textContent = tool.name;
    document.getElementById('modalDescription').textContent = tool.description;
    document.getElementById('modalStars').textContent = stars;
    document.getElementById('modalRatingValue').textContent = tool.rating;
    document.getElementById('modalPrimaryBtn').href = tool.url;
    document.getElementById('modalFeatures').innerHTML = tool.features.map(feature => 
      `<div class="feature-item">✅ ${feature}</div>`
    ).join('');
    
    this.updateModalFavoriteButton();
    
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Update modal favorite button state
  updateModalFavoriteButton() {
    const btn = document.getElementById('modalFavoriteBtn');
    if (this.currentToolInModal && this.isFavorite(this.currentToolInModal.id)) {
      btn.innerHTML = '❤️ Remove from Favorites';
    } else {
      btn.innerHTML = '🤍 Add to Favorites';
    }
  }

  // Close modal
  closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
    this.currentToolInModal = null;
  }

  // Share current tool
  shareCurrentTool() {
    if (!this.currentToolInModal) return;
    
    const shareData = {
      title: this.currentToolInModal.name,
      text: this.currentToolInModal.description,
      url: this.currentToolInModal.url
    };
    
    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      navigator.clipboard.writeText(this.currentToolInModal.url);
      this.showToast('Link copied to clipboard!');
    }
  }

  // Update stats display
  updateStats() {
    const stats = document.getElementById('statsDisplay');
    stats.textContent = `${this.filteredTools.length} of ${this.tools.length} tools`;
  }

  // Show toast notification
  showToast(message) {
    const existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const hub = new AIToolsHub();
});