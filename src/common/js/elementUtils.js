import {MessageBox} from 'element-ui';


export default {

  alert(title = '提示', message,callback) {
    MessageBox.alert(message, title, {
      confirmButtonText: '确定'
    }).then(callback);
  }
}
