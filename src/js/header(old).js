function removeCarrosel() {
	let carousel = document.querySelectorAll(".carousel-filmes");

	for (let i = 0 ; i < carousel.length - 1 ; i++) {
		carousel.item(i).remove();
	}
}


function removeMainBanner() {
	const mainBanner = document.querySelector(".filme-principal");
	if (mainBanner) { mainBanner.style = "display: none;" };
}


function openAnime(anime) {
	let title = anime.innerHTML;
	const endStringIndex = title.indexOf(".jpg");
	const startStringIndex = title.indexOf("img/") + 4;
	title = title.substring(startStringIndex, endStringIndex);
	console.log(title);
}


async function search(animeMovieQuery) {
	
	const animes = await Utils.getTitles(animeMovieQuery);
  
	console.log("animeMovieQuery: " + animeMovieQuery);
	console.log("Animes: ")
	console.log(animes);

	if ( animes.length == 0 ) {
		alert("Nenhum resultado encontrado");
	}

	let i = 0;
	const activeColumns = 4;
	let HTML = "";
	animes.forEach( anime => {

		if (i < activeColumns) {
			HTML += `<div class="owl-item active" style="width: 239.4px; margin-right: 10px;">\n`;
		} else {
			HTML += `<div class="owl-item" style="width: 239.4px; margin-right: 10px;">\n`;
		}
		HTML += `<div class="item">\n`;
		HTML += `<img class="box-filme" src="../img/${anime.path}.jpg" onclick="mountAnimePopup('${anime.id}')">\n`;
		HTML += `</div>\n`;
		HTML += `</div>\n`;

		i++;
	});

	// inject html
	const owlStageOuter = document.querySelector(".owl-stage");
	// owlStageOuter.style = `width: ${i}; !important`;
	owlStageOuter.innerHTML = HTML;

	// make items clickable
	// const animesHtml = owlStageOuter.querySelectorAll(".item");
	// animesHtml.forEach(anime => {
	// 	anime.addEventListener("click", () => {
	// 		openAnime(anime);
	// 	});
	// });

	// Make search result visible
	const carouselFilmes = document.querySelector(".carousel-filmes");
	carouselFilmes.style = "display: block;";
}


const textForm = document.getElementById("search-txt");
textForm.addEventListener("keydown", e => {
	if (e.code === "Enter") {
		removeMainBanner();
		removeCarrosel();
		search(e.target.value);
	}
});


const magnifierButton = document.getElementById("search-btn");
magnifierButton.addEventListener("click", e => { 
	removeMainBanner();
	removeCarrosel();
	search(document.getElementById("search-txt").value);
});
