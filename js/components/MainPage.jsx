// js/components/MainPage.jsx
import {useEffect, useState} from "react";

export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch(e){
			console.log(e);
		}
	}, []);

	const deleteRecord = async (e) => {
		e.preventDefault();

		console.log(e.target.id);
		const id = e.target.id;

		try{
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
					setRecords(records.filter(record => record._id !== id));
				});
		}
		catch(e){
			console.log(e);
		}
	}

	console.log(records);
	function redirectToPage() {
		window.location.href = '/insert';
	  }
	  function redirectToPage2() {
		window.location.href = '/chat';
	  }

	return (
		<section className={"bg-white"}>
			<div className={"container px-6 py-10 mx-auto"}>
			<button type="button"
								        onClick={redirectToPage}

								        className="mt-8 text-gray-900 bg-gradient-to-r from-yellow-200 via-orange-300 to-orange-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
									Add a new skincare product
								</button>
								
								<button type="button"
								  onClick={redirectToPage2}
								        className="mt-8 text-gray-900 bg-gradient-to-r from-yellow-200 via-orange-300 to-orange-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
									Chat
								</button>
				<h1 className={"w-[500px] mx-auto text-center text-6xl font-bold text-orange-600"}>ACME</h1>
				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-orange-600"}>Give your beauty routine a shake-up with our curated collection of luxury skin care products.</p>

				<div className={"grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"}>
					{
						records.map(record => (
							<div key={record._id}
								className={"max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow "}
							>
								<h3 className={"mb-2 text-2xl font-bold text-orange-500"}>{record.title}</h3>
								<img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src={record.image}  />
								<h10 className={"mb-2 text-xl font-bold text-yellow-500"}>Description:</h10>
								<p className={"font-normal "}>{record.description}</p>
								<h10 className={"mb-2 text-xl font-bold text-yellow-500"}>How to use:</h10>
								<p className={"font-normal "}>{record.instructions}</p>
								<button type="button"
								        onClick={deleteRecord}
								        id={record._id}
								        className="mt-8 text-gray-900 bg-gradient-to-r from-yellow-200 via-orange-300 to-orange-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
									Delete
								</button>
							</div>
						))
					}
				</div>
			</div>
		</section>
	)
}