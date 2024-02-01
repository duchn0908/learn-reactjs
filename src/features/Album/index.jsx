import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc xuân hay nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/3/9/b/d/39bdaab893b5e94f8be1cad9887fe1e3.jpg'
        },
        {
            id: 2,
            name: 'Song ca nhạc xuân',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/4/5/2/c/452cf501f8288f94f0b1794e3ed42970.jpg'
        },
        {
            id: 3,
            name: 'Tình khúc xuân',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/f/0/c/bf0c27db29ca24842636bc6931a62a5d.jpg'
        },
        {
            id: 4,
            name: 'Nhạc xuân sôi động',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/f/e/b/5/feb5d31c9ab5ca5c3742a22f86cc9e61.jpg'
        },
        {
            id: 5,
            name: 'Xuân lắng đọng',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/7/e/e/b/7eeb3a46813f18c8d03be89329200b90.jpg'
        }
    ]
    return (
        /*<div className='left'>
            <ul>
                <li> khám phá </li>
                <li> zing chart </li>
                <li> radio </li>
            </ul>
        </div>*/

        <div className='right'>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;