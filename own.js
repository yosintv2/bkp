 function updateStatus() {
            const statusElements = document.querySelectorAll('[id^="status"]');
            const currentTime = new Date().getTime();

            statusElements.forEach(element => {
                const startTime = new Date(element.getAttribute('data-start')).getTime();
                const endTime = new Date(element.getAttribute('data-end')).getTime();

                if (currentTime < startTime) {
                    element.textContent = 'Start Soon';
                    element.className = 'start-soon';
                } else if (currentTime >= startTime && currentTime <= endTime) {
                    element.textContent = 'Live Now';
                    element.className = 'live-now blink';
                } else {
                    element.textContent = 'Match End';
                    element.className = 'match-end';
                }
            });
        }

        // Check every second if the current time falls within the start and end time
        setInterval(updateStatus, 1000);

        // Initial check when the page loads
        updateStatus();
