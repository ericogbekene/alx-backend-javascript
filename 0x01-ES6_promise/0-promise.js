export default function getResponseFromAPI(){
	return new Promise((resolve, reject) => {
		let checker = true;
		if (checker){
			resolve('Success');
		}
		else{
			reject('Failed');
		}
	}
	).then((message) => {console.log(message)}).catch((error) => console.error(error) );
}
