import React, {Component} from 'react';
import axios from 'axios';

class ContentArea extends Component {
    constructor() {
        super();
        this.state = {
            endPoint: "https://formula-test-api.herokuapp.com/menu",
            hotDogsToRender: [{id: 3}]
        };

    }

    componentWillMount() {
        this.getHotDogs();
    }

    filterItems(items) {
        for (let i = 0; i < items.length; ++i) {  //add new param to the obj, for counting time in milliseconds
            let dateFromObj = items[i].expirationDate;
            items[i].dateFromObjMillisek = Date.parse(dateFromObj);
        }
        items.sort(function (a, b) { //sorting our list of products from old to newest products
            return a.dateFromObjMillisek - b.dateFromObjMillisek;
        });
        items = items.filter(obj => { //Delete  items with expiration date from arr
            let year = 31536000000;
            let dateNow = Date.parse(new Date());
            return ((dateNow-year) - obj.dateFromObjMillisek <= 0)// calculate new date(minus year), because endPoint returns wrong date.
        });
        return items;

    }

    getHotDogs() {
        axios.get(this.state.endPoint)
            .then(res => {

                this.setState({hotDogsToRender: this.filterItems(res.data)});
                console.log(res.data)
            })
    }

    render() {
        return (
            <div className={'contentContainer'}>
                {this.state.hotDogsToRender.map(el => {
                    return <div className='contentItemContainer' key={el.id}>
                        <div
                            className={el.id % 2 ? 'contentContainerTextWrapperLeft' : 'contentContainerTextWrapperRight'}>
                            <img className="contentContainerLine" src={require('../img/line.png')}></img>
                            <div>
                                <p className="contentContainerHeader">{el.name}</p>
                                <p className="contentContainerText">{el.description}</p>
                            </div>
                        </div>
                        <div className="contentContainerImgWrapper">
                            <img className="contentContainerPhoto" src={el.backgroundURL} alt={'tasty hot dog'}></img>
                            {console.log(el.backgroundURL)}
                        </div>
                    </div>

                })}
            </div>
        )
    }

}

export default ContentArea;