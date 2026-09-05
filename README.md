# Digital Clock - Multiple Timezones 🌍⏰

A beautiful, responsive digital clock that displays the current time in different time zones around the world.

## Features

✨ **Key Features:**
- 📍 Display time in 8 major world cities (New York, London, Paris, Dubai, Tokyo, Sydney, Los Angeles, Moscow)
- 🌐 Real-time updates every second
- 🎨 Beautiful gradient background with modern design
- 📱 Fully responsive design (works on desktop, tablet, mobile)
- ⏱️ Shows local time with your timezone
- 🎭 Smooth animations and hover effects
- 📦 No external dependencies - vanilla JavaScript only

## Timezones Included

| City | Timezone | UTC Offset |
|------|----------|------------|
| New York | EST | UTC-5 |
| Los Angeles | PST | UTC-8 |
| London | GMT | UTC+0 |
| Paris | CET | UTC+1 |
| Moscow | MSK | UTC+3 |
| Dubai | GST | UTC+4 |
| Tokyo | JST | UTC+9 |
| Sydney | AEDT | UTC+11 |

## Live Demo

Visit the deployed version:
👉 [Digital Clock on Vercel](https://yolky-palky.vercel.app)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/petriukasgmv-jpg/digital-clock-timezones.git
cd digital-clock-timezones
```

2. Open `index.html` in your browser or start a local server:
```bash
python -m http.server 8000
# or
npx http-server
```

3. Visit `http://localhost:8000` in your browser

## Usage

No configuration needed! Just open the HTML file and the clock will:
- ✅ Automatically detect your local timezone
- ✅ Display your local time
- ✅ Show time in 8 major world cities
- ✅ Update every second in real-time

## Customization

To add or modify timezones, edit the `timezones` object in `script.js`:

```javascript
const timezones = {
    'clock-id': { name: 'City Name', offset: UTC_OFFSET, id: 'city-id' },
    // Add more timezones...
};
```

Then add corresponding HTML in `index.html`:

```html
<div class="clock-card">
    <div class="timezone-name">City Name</div>
    <div class="clock-display" id="clock-id">00:00:00</div>
    <div class="timezone-offset" id="clock-id-offset">UTC±X</div>
</div>
```

## Project Structure

```
digital-clock-timezones/
├── index.html      # Main HTML file
├── style.css       # Styling and animations
├── script.js       # JavaScript logic for clock updates
├── package.json    # Project metadata
└── README.md       # This file
```

## Technologies Used

- 🔧 **HTML5** - Semantic markup
- 🎨 **CSS3** - Modern styling, gradients, animations, grid layout
- 📝 **Vanilla JavaScript** - No frameworks or dependencies
- 📱 **Responsive Design** - Mobile-first approach

## Browser Compatibility

✅ Chrome/Chromium (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

## Performance

- ⚡ Lightweight - only 3 files
- 🚀 No external dependencies
- 💾 Small file size (< 10KB total)
- 🎯 Optimized animations with CSS
- ⏱️ Efficient JavaScript with minimal DOM manipulation

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Author

👨‍💻 [petriukasgmv-jpg](https://github.com/petriukasgmv-jpg)

## Contributing

Feel free to fork this project and submit pull requests for any improvements!

---

**Made with ❤️ and ⏰**
