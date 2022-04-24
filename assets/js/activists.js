let theta = Math.PI / 4.0;
        let new_theta = 0.0;
        let new_x = 0.0;
        let new_y = 0.0;
        let wheel_radius = 200.00;
        const photos = document.querySelectorAll('.photo');
        const center = {
            x: parseFloat(getComputedStyle(photos[0]).left),
            y: parseFloat(getComputedStyle(photos[0]).top),

        }

        photos.forEach((photo, index) => {
            new_theta = theta * index;
            new_x = (Math.cos(new_theta) * wheel_radius);
            new_y = (-1.0 * Math.sin(new_theta) * wheel_radius);
            photo.style.left = `${center.x + new_x}px`;
            photo.style.top = `${center.y + new_y}px`;
        });