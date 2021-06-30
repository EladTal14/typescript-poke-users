import {ObjectMap} from "../../classes/object-map";
import {Countries} from "../../enums/countries";


export const Play = () => {

    const strMap: ObjectMap<string> = new ObjectMap<string>();
    console.log('strMap.items', strMap.items)
    strMap.addItemToMap('rami', '1')
    strMap.addItemToMap('elad', '2')
    strMap.addItemToMap('avi', '3')
    strMap.addItemToMap(Countries.USA, '4')
    strMap.addItemToMap(Countries.Egypt, '5')
    strMap.addItemToMap(Countries.Israel, '6')
    strMap.addItemToMap('aba', '7')
    strMap.removeItemFromMap('mam')
    strMap.removeItemFromMap('dam')
    console.log('strMap.items', strMap.items)

    return (
        <div>

        </div>
    );
};

