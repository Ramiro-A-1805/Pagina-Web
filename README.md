<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Interactive%203D%20Portfolio&fontSize=50&fontAlignY=38&desc=Showcasing%20Creative%20Development%20&descAlignY=55&descAlign=62" />

  # 🚀 Interactive 3D Portfolio Webpage

  **A modern, stunning, and fully interactive personal portfolio featuring a custom 3D model crafted in Blender, paired with smooth UI animations and Rive graphics.**

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Blender](https://img.shields.io/badge/Blender-F5792A?style=for-the-badge&logo=blender&logoColor=white)](https://www.blender.org/)
  [![Rive](https://img.shields.io/badge/Rive-1D1D1D?style=for-the-badge&logo=rive&logoColor=white)](https://rive.app/)
  
</div>

---

## 🌟 About The Project

Welcome to my interactive digital workspace! This project is a custom-built, highly engaging personal portfolio designed to showcase my skills as a Systems Engineer (Ingeniero en Sistemas) with a passion for technology, UI/UX design, and video games.

The core highlight of this portfolio is the integration of **custom 3D models developed in Blender**, bringing a unique, tangible, and dynamic feel to the web experience. Combined with sleek CSS glassmorphism effects, scroll-triggered fade-ins, and interactive vector animations using **Rive**, this website is more than just a resume—it's a digital experience.

### ✨ Key Features

- **🎨 3D Blender Integration:** Stunning custom 3D models imported and rendered directly in the browser to create an immersive visual experience.
- **⚡ Interactive Animations:** Smooth, performant interactive graphics powered by the `@rive-app/canvas` library. (Includes an interactive animated bear character!).
- **🪞 Glassmorphism UI:** A sleek, modern user interface featuring frosted glass effects (`glass-card`, `glass-panel`) over vibrant, dynamic backgrounds.
- **📱 Fully Responsive:** Carefully structured semantic HTML and flexible CSS ensuring the portfolio looks amazing on desktops, tablets, and smartphones.
- **✨ Scroll Effects:** Implementation of `IntersectionObserver` for buttery-smooth fade-in animations as the user scrolls down the page.
- **🔤 Modern Typography:** Clean and professional aesthetic utilizing the *Inter* font family from Google Fonts.

---

## 🛠️ Built With

This project was brought to life using the following technologies and tools:

*   **HTML5:** Semantic structure and accessibility.
*   **CSS3 (Vanilla):** Custom styling, grid layouts, flexbox, and modern glassmorphism UI.
*   **JavaScript (ES6):** Logic for scroll observers and rendering animations.
*   **Blender:** For conceptualizing, modeling, and exporting the 3D assets showcased on the site.
*   **Rive:** For lightweight, interactive state-machine animations (like the interactive login bear).

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser (Chrome, Firefox, Safari, Edge) to view the project. No complex build tools or package managers are required for the base HTML/CSS/JS version.

### Installation & Setup

1. **Clone the repository** (or download the ZIP file):
   ```bash
   git clone https://github.com/your-username/interactive-3d-portfolio.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd interactive-3d-portfolio
   ```
3. **Run the project:**
   Simply open the `index.html` file in your preferred web browser. 
   
   *(Optional)* If you want to view it through a local development server to avoid any CORS issues with local assets or 3D models, you can use an extension like VS Code's **Live Server** or run:
   ```bash
   npx serve .
   ```

---

## 📂 Project Structure

```text
📁 Pagina Web/
│
├── 📄 index.html          # Main HTML structure and layout
├── 📄 style.css           # Styling, themes, and glassmorphism effects
├── 📄 README.md           # Project documentation
│
└── 📁 assets/             # Media folder
    ├── 🖼️ avatar.png      # Profile picture / avatar
    ├── 🐻 animated_login_bear.riv # Rive interactive animation file
    └── 🧊 (3D Models)     # Blender exported assets (e.g., .glb / .gltf)
```

---

## 👨‍💻 Author

**Ramiro German Arcila Gamboa**  
*Systems Engineer & Creative Developer*

- 📧 Email: [Ramiro Arcila-ramiro@gmail.com](mailto:tu-correo@ejemplo.com)
- 💼 LinkedIn: [Your LinkedIn Profile](#)
- 🐙 GitHub: [Ramiro-A-1805](#)

---

## 💡 Future Enhancements

- [ ] Implement Three.js / React Three Fiber for more complex camera controls around the Blender 3D models.
- [ ] Add a dynamic dark/light mode toggle.
- [ ] Integrate a working contact form using a serverless backend.
- [ ] Add post-processing effects (bloom, chromatic aberration) to the 3D canvas.

---

<div align="center">
  <p>Made with ❤️, ☕, and a lot of keyframes.</p>
</div>
