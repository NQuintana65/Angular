export class TimeService {

    subscribe(callback: (time: Date) => void, delay: number) {		
		callback(new Date());
		setInterval(() => callback(new Date(), delay));
	}
	
}