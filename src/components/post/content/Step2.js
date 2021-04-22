import { Upload } from 'antd';
import React, { Component } from 'react';
import ImgCrop from 'antd-img-crop';
import 'antd/es/modal/style';
import 'antd/es/slider/style';

class PostStep2 extends Component {
    constructor(props) {
        super(props);
        this.state={
        }
    }

     onPreview = async file => {
        let src = file.url;
        if (!src) {
          src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
      };
    render() {
        return (
            <div className="container wXl5RTamVUQpIsQLT-GCD cc_cursor">
            <form className="_1mdvc2CcBloJ9uZbEWoqpZ"><div style={{ paddingBottom: '15px' }}>
            <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={this.props.post.images}
        onChange={this.props.onChange}
        onPreview={this.onPreview}
      >+ Upload
        {/* {fileList.length < 5 && '+ Upload'} */}
      </Upload>
    </ImgCrop>

                </div>
              </form>  
            </div>
        );
    }
}

export default PostStep2;