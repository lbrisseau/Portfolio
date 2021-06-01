function melange(tableau){
    // je créer le tableau qui sera mélangé
    let tableau2 =[];
    let taille = tableau.length;
    for(let i =0;i<taille;i++){
    	do{
    		x = Math.floor(Math.random() * taille);
    	}while(tableau2[x] != undefined);
        // tableau2[x] <- tableau[i]
        tableau2[x] = tableau[i];

    }
    return tableau2;
}
//---------------------------------------------------	
let tab42= [];
for(let i=0; i< 42;i++)
{
	tab42.push(i);
}
tab42Mix = melange(tab42);
// je prends les 16 permieres
let tab16 = tab42Mix.splice(0,16);
// je concatene les 2 tableaux
let tab32 = tab16.concat(tab16);
// je melange a nouveau
let tab32Mix = melange(tab32);
console.log(tab32Mix);

let pos = -1;
let img;

let win = 0;


for (let i=0;i<tab32Mix.length;i++){
	// <div></div>
	let tuile = document.createElement('div');

	// balise image
	let image =  document.createElement('img');
	image.setAttribute('src','./classic/'+ tab32Mix[i] +'.jpg');
	image.setAttribute('width','80');
	image.setAttribute('data-position',i);
	image.onclick = function(){
		
		if (pos < 0){
			pos = this.getAttribute('data-position');
			img = this.getAttribute('src');
			this.parentElement.setAttribute('class','green');
		} else {
			document.querySelector('[data-position="'+ pos +'"]').parentElement.removeAttribute('class');
			this.parentElement.setAttribute('class','green');
			previousPos = pos;
			previousImg = img;
			pos = this.getAttribute('data-position');
			img = this.getAttribute('src');
			// la position de l'image
			console.log(pos);
			// le nom de l'image
			console.log(img);

			if ((previousImg == img) && (previousPos != pos)){
				this.parentElement.removeAttribute('class');
				this.remove();
				document.querySelector('[data-position="'+ previousPos +'"]').remove();
				pos = -1;
				win++;
				if (win == 16) {
					document.getElementById('liste').remove();
					let message = document.createElement('h1');
					message.textContent = 'WINNER !';
					message.setAttribute('class','win');
					document.getElementById('body').appendChild(message);
				}
			}
		}

	};
	// <div><img ></div>
	tuile.appendChild(image);
	
	document.getElementById('liste').appendChild(tuile);

}

