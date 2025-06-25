 //element access methods in js
            // a. getElementById
            // b. getElementsByClassName
            // c. getElementByTagNAme
            // d. querySelector and querySelectorAll

            // innnerText , textContent , style , value , placeHolder, 
            // a. getElementById
            h=document.getElementById('hd');
            // h.innerText='Aashik Thakur';
            // h.textContent='Aashik Thakur';
            //innerHTML can change the structure of the tag as well
            // h.innerHTML='<a href="#">Aashik Thakur</a>';

            // p=document.getElementById('p1');
            // p.innerText='This is Aashik Thakur learning JS DOM'.toUpperCase();
            // p.textContent='This is Aashik Thakur learning JS DOM'.toUpperCase();
            // p.innerHTML='<i>This is Aashik Thakur learning JS DOM</i>'.toUpperCase();

            // p2=document.getElementById('p1');
            // p2.style.backgroundColor = "orangered";

            // h.style.cssText = `
            //     background-color: black;
            //     color: white;
            //     text-align: center;
            // `;





            // let hs = document.getElementsByClassName('head');
            // for (let key of hs) {
            //     key.style.cssText = `
            //         background-color: blue;
            //         color: white;
            //     `;
            // }

            // let hs = document.getElementsByTagName('h1');
            // for (let key of hs) {
            //     key.style.cssText = `
            //         background-color: blue;
            //         color: white;
            //     `;
            // }

            // let qs=document.querySelector('#hd');
            // qs.style.color="red";

            // works for first one only 
            // let qs=document.querySelector('.head');
            // qs.style.color="red";
            
            // let qs=document.querySelectorAll('.head');
            // for(let key of qs){
            //     key.style.color="red";
            // }

            let qs=document.querySelectorAll('li:nth-child(even)');
            for(let key of qs){
                key.style.color="red";
            }