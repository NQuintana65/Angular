export class TimeService {
    subscribe(callback, delay) {		
		callback(new Date());
		setInterval(() => callback(new Date()), delay);
	}
}