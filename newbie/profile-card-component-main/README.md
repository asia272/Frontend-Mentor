# 🎭 Profile Card Component

This is a solution to the **Profile Card Component** challenge from [Frontend Mentor](https://www.frontendmentor.io). The challenge improves skills in **HTML, CSS, and responsive design**.

## 📌 Features

✅ Clean & minimal UI  
✅ Responsive design for all devices  
✅ Hover effects & smooth layout  
✅ Multi-background image positioning  

## 🚀 Technologies Used

- **HTML5**
- **CSS3 (Flexbox, Variables)**
- **Google Fonts (Kumbh Sans)**

## 🎨 Background Image Issue & Solution

Initially, I faced an issue **setting multiple background images** in CSS. To fix it, I used:  

1️⃣ **Multiple background images** in `background-image`.  
2️⃣ **Checked live preview for accuracy:** [Live Demo](https://asia272.github.io/Frontend-Mentor/newbie/profile-card-component-main/)  
3️⃣ **Separate positioning** using `background-position`.  

### **CSS Fix:**
```css
background-image: url("./images/bg-pattern-top.svg"), url("./images/bg-pattern-bottom.svg");
background-repeat: no-repeat, no-repeat;
background-position: top -580px left -530px, bottom -770px right -400px;
background-size: 1000px, 1000px;
