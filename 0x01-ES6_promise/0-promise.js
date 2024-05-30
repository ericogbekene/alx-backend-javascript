export default function getResponseFromAPI(){
	return new Promise((resolve, reject) => {
		if (true){
			resolve('Success');
		}
		else{
			reject('Failed');
		}
	}
	).then((message) => {console.log(message)}).catch(() => console.error(error) );
}
