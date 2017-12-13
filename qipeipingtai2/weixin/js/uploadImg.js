 //图片上传
 function ajaxFileUpload() {
     $.ajaxFileUpload
     (
         {
             url:imgUploadImg, //用于文件上传的服务器端请求地址
             secureuri: false, //一般设置为false
             fileElementId: 'file', //文件上传空间的id属性  <input type="file" id="file" name="file" />
             dataType: 'json', //返回值类型 一般设置为json
             success: function (data, status)  //服务器成功响应处理函数
             {
                 console.log(data);
                 //上传成功返回值，必须为json格式
                 if(data.status===200){
                     $("#imgSrc").attr('src',imgUrl+data.url);
                     //将数据保存到本地
                     JsonStorage.setItem('face_pic',data.url);
                     //刷新父级标记
                     JsonStorage.setItem('pIImg','1');//父级刷新标记
                 }

             },
             error: function (data, status, e)//服务器响应失败处理函数
             {

             }
         }
     );
     return false;
 }