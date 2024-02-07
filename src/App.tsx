import React from 'react';
import { create, Workbench ,molecule} from '@dtinsight/molecule';
import '@dtinsight/molecule/esm/style/mo.css';
import API from './api';


async function exec()
{
    const res =  await API.getFolderTree()
    if (res.message === 'success') {
        molecule.folderTree.add(res.data);
    }
}
const moInstance = create({
    extensions: [],
});
exec();


const App = () => moInstance.render(<Workbench />);

export default App;