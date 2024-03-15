// const colors = document.querySelectorAll('.color');
// const body = document.body;

// colors.forEach(color => {
//     color.addEventListener('click', () => {
//         body.style.backgroundColor = color.style.backgroundColor;
//     });
// });



const colorButtons = document.querySelectorAll('.colorButton');

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.style.color = button.style.backgroundColor;
    });
});

const scrollIcon = document.getElementById('scrollIcon');

scrollIcon.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



// const colorPaletteIcon = document.getElementById('colorPaletteIcon');

//     // Function to change text color and background color
//     function changeColors(color) {
//         document.body.style.color = color;
//         document.body.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8);
//     }

//     // Event listener for color palette icon click
//     colorPaletteIcon.addEventListener('click', function() {
//         const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
//         const randomColor = colors[Math.floor(Math.random() * colors.length)];
//         changeColors(randomColor);
//     });


// Get color palette icon
const colorPaletteIcon = document.getElementById('colorPaletteIcon');
// Get color palette
const colorPalette = document.createElement('div');
colorPalette.className = 'color-palette';

// Available colors
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

// Create color options
colors.forEach(color => {
    const colorOption = document.createElement('div');
    colorOption.className = 'color-option';
    colorOption.style.backgroundColor = color;
    colorOption.addEventListener('click', () => {
        document.body.style.backgroundColor = color;
        document.body.style.color = color === '#ffffff' ? '#000000' : '#ffffff';
    });
    colorPalette.appendChild(colorOption);
});

// Add color palette to the document
document.body.appendChild(colorPalette);

// Show/hide color palette on icon click
colorPaletteIcon.addEventListener('click', () => {
    colorPalette.style.display = colorPalette.style.display === 'block' ? 'none' : 'block';
});

// Fix color palette icon on scroll
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
        colorPaletteIcon.style.top = 'calc(50% + 50px)';
    } else {
        colorPaletteIcon.style.top = '50%';
    }
});
