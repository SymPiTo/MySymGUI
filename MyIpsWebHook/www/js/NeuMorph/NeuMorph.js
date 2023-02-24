/* -------------------------------------------------------------------------- */
/*                               Class uhr                                    */
/* -------------------------------------------------------------------------- */
class nm_uhr {
    constructor() {
 
    }
 

    create(ParentID, posTop, posLeft, TimeDate = true, symbol = true ) {
        var container = document.createElement("section");
        document.getElementById(ParentID).appendChild(container);
        container.className = "container";
        container.classList.add("uhr");
        container.style.position = "absolute";
        container.style.top = posTop;
        container.style.left = posLeft;
    
        var d1 = document.createElement("div");
        container.append(d1);
        d1.classList.add("uhr__container", "grid");
    
        var d2 = document.createElement("div");
        d1.append(d2);
        d2.classList.add("uhr__content", "grid");
    
        var d3 = document.createElement("div");
        d2.append(d3);
        d3.classList.add("uhr__circle");
    
        var d4 = document.createElement("span");
        d3.append(d4);
        d4.className = "uhr__twelve";
    
        var d5 = document.createElement("span");
        d3.append(d5);
        d5.className = "uhr__three";
    
        var d6 = document.createElement("span");
        d3.append(d6);
        d6.className = "uhr__six";
    
        var d7 = document.createElement("span");
        d3.append(d7);
        d7.className = "uhr__nine";
    
        var d8 = document.createElement("div");
        d3.append(d8);
        d8.className = "uhr__rounder";
    
        var d9 = document.createElement("div");
        d3.append(d9);
        d9.className = "uhr__hour";
        d9.id = "uhr-hour";
    
        var d10 = document.createElement("div");
        d3.append(d10);
        d10.className = "uhr__minutes";
        d10.id = "uhr-minutes";
    
        var d11 = document.createElement("div");
        d3.append(d11);
        d11.className = "uhr__seconds";
        d11.id = "uhr-seconds";
        
        if(symbol == true){
            //Mond Sonne Symbol
            var d12 = document.createElement("div");
            d3.append(d12);
            d12.className = "uhr__theme";
        
            var d13 = document.createElement("i");
            d12.append(d13);
            d13.className = "bx";
            d13.classList.add('bxs-moon');
            d13.id = "theme-button";
        }
        //digi Uhr
        if(TimeDate == true){
            var d14 = document.createElement("div");
            d2.append(d14);
        
            var d15 = document.createElement("div");
            d14.append(d15);
            d15.className = "uhr__text";
        
            var d16 = document.createElement("div");
            d15.append(d16);
            d16.className = "uhr__text-hour";
            d16.id = "text-hour";
        
            var d17 = document.createElement("div");
            d15.append(d17);
            d17.className = "uhr__text-minutes";
            d17.id = "text-minutes";
        
            var d18 = document.createElement("div");
            d15.append(d18);
            d18.className = "uhr__text-ampm";
            d18.id = "text-ampm";
        
            var d19 = document.createElement("div");
            d14.append(d19);
            d19.className = "uhr__date";
        
            var d20 = document.createElement("span");
            d19.append(d20);
            d20.id = "date-day";
        
            var d21 = document.createElement("span");
            d19.append(d21);
            d21.id = "date-month";
        
            var d22 = document.createElement("span");
            d19.append(d22);
            d22.id = "date-year";
        }
    }

    start() {
        /*==================== CLOCK ====================*/
        const hour = document.getElementById('uhr-hour'),
            minutes = document.getElementById('uhr-minutes'),
            seconds = document.getElementById('uhr-seconds')

        const uhr = () =>{
            let date = new Date()

            let hh = date.getHours() * 30,
                mm = date.getMinutes() * 6,
                ss = date.getSeconds() * 6
                
            // We add a rotation to the elements
            hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
            minutes.style.transform = `rotateZ(${mm}deg)`
            seconds.style.transform = `rotateZ(${ss}deg)`
        }
        setInterval(uhr, 1000) // 1000 = 1s

        /*==================== CLOCK & DATE TEXT ====================*/
        const textHour = document.getElementById('text-hour'),
            textMinutes = document.getElementById('text-minutes'),
            textAmPm = document.getElementById('text-ampm'),
            //   dateWeek = document.getElementById('date-day-week'),
            dateDay = document.getElementById('date-day'),
            dateMonth = document.getElementById('date-month'),
            dateYear = document.getElementById('date-year')

        const uhrText = () =>{
            let date = new Date()

            let hh = date.getHours(),
                ampm,
                mm = date.getMinutes(),
                day = date.getDate(),
                // dayweek = date.getDay(),
                month = date.getMonth(),
                year = date.getFullYear()

            // We change the hours from 24 to 12 hours and establish whether it is AM or PM
            if(hh >= 12){
                hh = hh - 12
                ampm = 'PM'
                themeButton.classList.add('bxs-moon')
            }else{
                ampm = 'AM'
                themeButton.classList.add('bxs-sun')
                
            }

            // We detect when it's 0 AM and transform to 12 AM
            if(hh == 0){hh = 12}

            // Show a zero before hours
            if(hh < 10){hh = `0${hh}`}

            // Show time
            textHour.innerHTML = `${hh}:`
            
            // Show a zero before the minutes
            if(mm < 10){mm = `0${mm}`}
            
            // Show minutes
            textMinutes.innerHTML = mm

            // Show am or pm
            textAmPm.innerHTML = ampm

            // If you want to show the name of the day of the week
            // let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']

            // We get the months of the year and show it
            let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

            // We show the day, the month and the year
            dateDay.innerHTML = day
            // dateWeek.innerHTML = `${week[dayweek]}`
            dateMonth.innerHTML = `${months[month]},`
            dateYear.innerHTML = year
        }
        setInterval(uhrText, 1000) // 1000 = 1s

        /*==================== DARK/LIGHT THEME ====================*/
        const themeButton = document.getElementById('theme-button')
        const darkTheme = 'dark-theme'
        const iconTheme = 'bxs-sun'

        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')

        // We obtain the current theme that the interface has by validating the dark-theme class
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

        // We validate if the user previously chose a topic
        if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
        }

        // Activate / deactivate the theme manually with the button
        themeButton.addEventListener('click', () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme)
            themeButton.classList.toggle(iconTheme)
            // We save the theme and the current icon that the user chose
            localStorage.setItem('selected-theme', getCurrentTheme())
            localStorage.setItem('selected-icon', getCurrentIcon())
        })
    }
        
} 