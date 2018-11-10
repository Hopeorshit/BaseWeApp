import {Base} from '../utils/base.js'

class Index extends Base {
  constructor() {
    super();
  }
  /*
   这是一个get方法的示例
  */
  room(id,callBack) {
    var params = {
      url: 'room/detail?id='+id,
      sCallBack: function (res) {
        callBack && callBack(res);
      },
    };
    this.request(params);
  }
 
  /*
  *这是一个post方法的是咧
  */
  // bindID(name, id, callBack) {
  //   var params = {
  //     url: 'user/bind_id',
  //     sCallBack: function (res) {
  //       callBack && callBack(res);
  //     },
  //     method: 'POST',
  //     data: {
  //       name: name,
  //       id: id
  //     }
  //   };
  //   this.request(params);
  // }
}
export { Index }