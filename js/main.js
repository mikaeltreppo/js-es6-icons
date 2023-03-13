const items = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
//colleghiamo al dom
const containerDom = document.getElementById('container');
const selectDom = document.getElementById('select');

for (let i = 0; i < items.length; i++) {
	containerDom.innerHTML += `<div id="ms_card" class="card mt-5">
  <div class="card-body d-flex flex-wrap justify-content-center">
  <div class="w-100 text-center"><i class="fs-2 fa-solid ${items[i].prefix}${items[i].name}" style="color:${items[i].color}"></i></div>
  <div>${items[i].name}</div>
  </div>
</div>`}

//creo ascoltatore di eventi

selectDom.addEventListener('change',
	function () {

		if (selectDom.value == "animals") {
			containerDom.innerHTML = "";
			let animalLeft = items.filter(anim => anim.type == "animal");
			console.log(animalLeft);
			for (let i = 0; i < animalLeft.length; i++){
			containerDom.innerHTML +=  `<div id="ms_card" class="card mt-5">
			<div class="card-body d-flex flex-wrap justify-content-center">
			<div class="w-100 text-center"><i class="fs-2 fa-solid ${animalLeft[i].prefix}${animalLeft[i].name}" style="color:${animalLeft[i].color}"></i></div>
			<div>${animalLeft[i].name}</div>
			</div>
		  </div>`;
		}}
		//vegetables 
		else if (selectDom.value == "vegetable") {
			containerDom.innerHTML = "";
			let vegeLeft = items.filter(veg => veg.type == "vegetable");
			console.log(vegeLeft);
			for (let i = 0; i < vegeLeft.length; i++){
			containerDom.innerHTML +=  `<div id="ms_card" class="card mt-5">
			<div class="card-body d-flex flex-wrap justify-content-center">
			<div class="w-100 text-center"><i class="fs-2 fa-solid ${vegeLeft[i].prefix}${vegeLeft[i].name}" style="color:${vegeLeft[i].color}"></i></div>
			<div>${vegeLeft[i].name}</div>
			</div>
		  </div>`;
		}}
		//user
		else if (selectDom.value == "user") {
			containerDom.innerHTML = "";
			let userLeft = items.filter(user => user.type == "user");
			console.log(userLeft);
			for (let i = 0; i < userLeft.length; i++){
			containerDom.innerHTML +=  `<div id="ms_card" class="card mt-5">
			<div class="card-body d-flex flex-wrap justify-content-center">
			<div class="w-100 text-center"><i class="fs-2 fa-solid ${userLeft[i].prefix}${userLeft[i].name}" style="color:${userLeft[i].color}"></i></div>
			<div>${userLeft[i].name}</div>
			</div>
		  </div>`;
		}}
		// resto
		else{
			for (let i = 0; i < items.length; i++) {
				containerDom.innerHTML += `<div id="ms_card" class="card mt-5">
			  <div class="card-body d-flex flex-wrap justify-content-center">
			  <div class="w-100 text-center"><i class="fs-2 fa-solid ${items[i].prefix}${items[i].name}" style="color:${items[i].color}"></i></div>
			  <div>${items[i].name}</div>
			  </div>
			</div>`}
		}
	})