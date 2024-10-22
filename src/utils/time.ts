import dayjs from "dayjs";

const formatDate = (date:Date|number,format='YYYY-MM-DD HH:mm:ss') =>{
    return dayjs(date).format(format)
}


export {formatDate}