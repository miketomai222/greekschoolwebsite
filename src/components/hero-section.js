class HeroSection extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const subtitle = this.getAttribute('subtitle') || '';
    const background = this.getAttribute('background') || 'primary';
    const image = this.getAttribute('image') || '';

    const bgClasses = {
      'primary': 'bg-primary',
      'primary-light': 'bg-primary-light',
      'primary-pale': 'bg-primary-pale',
      'gradient': 'bg-gradient-to-r from-primary to-primary-light'
    };

    const textColor = background === 'primary-pale' ? 'text-primary' : 'text-white';

    const imageStyle = image ? `background-image: linear-gradient(rgba(30, 58, 95, 0.85), rgba(30, 58, 95, 0.85)), url('${image}'); background-size: cover; background-position: center;` : '';
    const bgClass = image ? '' : (bgClasses[background] || bgClasses.primary);

    this.innerHTML = `
      <section class="${bgClass} ${textColor}" style="${imageStyle}">
        <div class="section-container py-16 md:py-24">
          <div class="max-w-4xl mx-auto text-center">
            ${title ? `<h1 class="mb-6">${title}</h1>` : ''}
            ${subtitle ? `<p class="text-lg md:text-xl leading-relaxed opacity-90">${subtitle}</p>` : ''}
            <slot></slot>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
