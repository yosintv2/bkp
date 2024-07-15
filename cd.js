 function updateStatus() {
            const statusElements = document.querySelectorAll('[id^="status"]');
            const currentTime = new Date().getTime();

            statusElements.forEach(element => {
                const startTime = new Date(element.getAttribute('data-start')).getTime();
                const endTime = new Date(element.getAttribute('data-end')).getTime();

                if (currentTime < startTime) {
                    const timeDiff = startTime - currentTime;
                    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
                    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                   element.innerHTML = `<span>${hours}h</span> <span>${minutes}m</span> <span>${seconds}s</span> `;
                    element.className = 'countdown';
                } else if (currentTime >= startTime && currentTime <= endTime) {

                  element.innerHTML = `<span> Live Now </span>`;
                    element.className = 'live-now blink';
                } else {
                    element.innerHTML = `<span> Match End </span>`;
                    element.className = 'match-end';
                }
            });
        }

        // Check every second if the current time falls within the start and end time
        setInterval(updateStatus, 1000);

        // Initial check when the page loads
        updateStatus();
