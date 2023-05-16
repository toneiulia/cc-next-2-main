// js/components/MainPage.jsx
export default function InsertPage() {
	const insertRecord = async (e) => {
		e.preventDefault();

		const title = document.getElementById('title').value;
		const image = document.getElementById('image').value;
		const description = document.getElementById('description').value;
		const instructions = document.getElementById('instructions').value;
		const data = {
			title: title,
			image:image,
			description: description,
			instructions:instructions
		};

		console.log(data);

		fetch("/api/records", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then( () => {
				console.log("A records has been uploaded")
				document.getElementById('title').value = '';
				document.getElementById('image').value = '';
				document.getElementById('instructions').value = '';
				document.getElementById('description').value = '';
			})
	}

	function redirectToPage() {
		window.location.href = '/';
	  }
	return (
		<section className={"bg-white"}>
			<div className={"container px-6 py-10 mx-auto"}>
			<button type="button"
								  onClick={redirectToPage}
								        className="mt-8 text-gray-900 bg-gradient-to-r from-yellow-200 via-orange-300 to-orange-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
									All Products
								</button>
								
				<h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-orange-600"}>Insert your skincare product</h1>
				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-orange-600"}>This is where you can insert your product</p>

				<form>
					<div className="mb-6">
						<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product:</label>
						<input type="text" id="title"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Your product" required/>
							   		<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image:</label>
						<input type="text" id="image"
						       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						       placeholder="Your image url" required/>
							   
					</div>
					<div className="mb-6">
						<label htmlFor="description"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description:</label>
						<textarea id="description"
						          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						          required/>
					</div>
					<div className="mb-6">
						<label htmlFor="instructions"
						       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instructions:</label>
						<textarea id="instructions"
						          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						          required/>
					</div>
					<button type="submit"
					        onClick={ insertRecord }
					        className="text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save
					</button>
				</form>

			</div>
		</section>
	)
}