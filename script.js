// Timezone data with UTC offsets
const timezones = {
    'ny-clock': { name: 'New York', offset: -5, id: 'ny' },
    'london-clock': { name: 'London', offset: 0, id: 'london' },
    'paris-clock': { name: 'Paris', offset: 1, id: 'paris' },
    'dubai-clock': { name: 'Dubai', offset: 4, id: 'dubai' },
    'tokyo-clock': { name: 'Tokyo', offset: 9, id: 'tokyo' },
    'sydney-clock': { name: 'Sydney', offset: 11, id: 'sydney' },
    'la-clock': { name: 'Los Angeles', offset: -8, id: 'la' },
    'moscow-clock': { name: 'Moscow', offset: 3, id: 'moscow' }
};

// Function to format time with leading zeros
function padZero(num) {
    return num.toString().padStart(2, '0');
}

// Function to get time for a specific timezone
function getTimeInTimezone(offset) {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const time = new Date(utc + 3600000 * offset);
    
    const hours = padZero(time.getHours());
    const minutes = padZero(time.getMinutes());
    const seconds = padZero(time.getSeconds());
    
    return `${hours}:${minutes}:${seconds}`;
}

// Function to get local timezone name
function getLocalTimezoneName() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (e) {
        return 'Local Time';
    }
}

// Function to get local UTC offset
function getLocalUTCOffset() {
    const date = new Date();
    const offset = -date.getTimezoneOffset() / 60;
    const sign = offset >= 0 ? '+' : '';
    return `UTC${sign}${offset}`;
}

// Update all clocks
function updateClocks() {
    // Update timezone clocks
    for (const [clockId, tzData] of Object.entries(timezones)) {
        const clockElement = document.getElementById(clockId);
        if (clockElement) {
            clockElement.textContent = getTimeInTimezone(tzData.offset);
        }
    }

    // Update local time
    const now = new Date();
    const hours = padZero(now.getHours());
    const minutes = padZero(now.getMinutes());
    const seconds = padZero(now.getSeconds());
    
    const localTimeElement = document.getElementById('local-time');
    if (localTimeElement) {
        localTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Update local timezone
    const tzElement = document.getElementById('local-timezone');
    if (tzElement) {
        tzElement.textContent = `${getLocalTimezoneName()} (${getLocalUTCOffset()})`;
    }
}

// Initialize and start updating
function init() {
    updateClocks();
    setInterval(updateClocks, 1000); // Update every second
}

// Start when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}