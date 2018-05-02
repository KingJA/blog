import {MessageBox} from 'element-ui';


export default {

  alert(title = '提示', message, callback) {
    MessageBox.alert(message, title, {
      confirmButtonText: '确定'
    }).then(callback);
  },
  confirm(title = '提示', message, callback) {
    MessageBox.confirm(message, title, {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(callback).catch(() => {
      //取消
    });
  },
}
