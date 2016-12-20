$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	

});
	

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	/*$.each(recipesArray, function(value, index){  no me funciono	
		for(var i =0; i < recipesArray.length; i++){
			if(recipesArray[i].highlighted === true);
			}
			$('.list-activities').append(index + ':' + value);
		});*/
		for(var i =0; i < recipesArray.length; i++){
			if(recipesArray[i].highlighted === true);
			var fotoRecetas = recipesArray[i];
			renderRecipe(fotoRecetas);
		}
		console.log('Recipes: ', recipesArray[i]);
	}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	$('.list-recipes').append('<span class="title-recipe"><a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">'+recipe.title+'</span><span class="metadata-recipe"><span class="author-recipe"> '+recipe.source.name+' </span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/640x800/'+recipe.name+'.jpg"/></a></span>');
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}

$(document).ready(function(){
	$('#ocultar').hide('js-back');
});

$(document).ready(function(){
	$('#ocultar').hide('js-menu');
});


$(document).ready(function printNews(){
	$('#printnews').text('NUEVAS RECETAS');
});


