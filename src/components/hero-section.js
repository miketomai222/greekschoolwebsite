class HeroSection extends HTMLElement {
  connectedCallback() {
    const title = this.getAttribute('title') || '';
    const subtitle = this.getAttribute('subtitle') || '';
    const background = this.getAttribute('background') || 'primary';
    const image = this.getAttribute('image') || '';

    const bgClasses = {
      'primary': 'bg-gradient-primary',
      'primary-light': 'bg-primary-light',
      'primary-pale': 'bg-primary-pale',
      'gradient': 'bg-gradient-to-r from-primary to-primary-light'
    };

    const textColor = background === 'primary-pale' ? 'text-primary' : 'text-white';

    const imageStyle = image ? `background-image: linear-gradient(160deg, rgba(30, 58, 95, 0.92), rgba(74, 144, 184, 0.85)), url('${image}'); background-size: cover; background-position: center;` : '';
    const bgClass = image ? '' : (bgClasses[background] || bgClasses.primary);

    this.innerHTML = `
      <section class="${bgClass} ${textColor} relative overflow-hidden" style="${imageStyle}">
        <!-- Decorative corner accents -->
        <div class="absolute top-6 left-6 w-16 h-16 border-l-2 border-t-2 border-accent opacity-40 hidden md:block"></div>
        <div class="absolute top-6 right-6 w-16 h-16 border-r-2 border-t-2 border-accent opacity-40 hidden md:block"></div>

        <div class="section-container py-20 md:py-28 lg:py-32 relative">
          <div class="max-w-4xl mx-auto text-center">
            ${title ? `
              <h1 class="mb-6 animate-fade-in-up">
                ${title}
              </h1>
            ` : ''}
            ${subtitle ? `
              <p class="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-90 animate-fade-in-up delay-200 max-w-3xl mx-auto">
                ${subtitle}
              </p>
            ` : ''}
            <div class="animate-fade-in-up delay-300">
              <slot></slot>
            </div>
          </div>
        </div>

        <!-- Greek key pattern at bottom -->
        <div class="greek-pattern opacity-60"></div>
      </section>
    `;
  }
}

customElements.define('hero-section', HeroSection);
