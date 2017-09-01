export default{
	format(t){
		let time=new Date(t)
		let Year=time.getFullYear();
		let Month=time.getMonth()+1;
		Month=Month<10?("0"+Month):Month;
		let Day=time.getDate();
		Day=Day<10?("0"+Day):Day;
		let shijian=Year+Month+Day;
		return shijian;
	}
}
