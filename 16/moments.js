import moment from "moment";

export const data = {
    formatDate: function(date, format) {
        return moment(date).format(format);
      },
    
      addTime: function(date, amount, measurement) {
        return moment(date).add(amount, measurement);
      },
 
      diffDates: function(date1, date2, measurement) {
        return moment(date1).diff(moment(date2), measurement);
      }
}  