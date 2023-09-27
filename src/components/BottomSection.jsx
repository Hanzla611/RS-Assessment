import '../assets/style.css'
import Loader from './Loader';
import MenuIcon from '../assets/menu.svg';
import ArrowIcon from '../assets/arrow.svg';

function BottomSection({ toggleDrawer, userData }) {
  return (
    <div>
      <table className="table text-sm w-full">
      <thead className="bg-gray-300 text-gray-600">
            <tr className='row'>
              <th  className="p-3">
                Name
              </th>
              <th  className="p-3">
                User ID
              </th>
              <th className="p-3">
                Role
              </th>
              <th  className="p-3">
                University
              </th>
              <th className='p-3'></th>
            </tr>
          </thead>
          <tbody>
            {userData.users?.length > 0
              ? userData?.users?.slice(0, 5).map((user) => {
                  return (
                    <tr className='row'>
                     <td className="p-3 font-medium capitalize flex items-center">
                        <img
                          className="w-9 h-9 mr-4 border-2 p-1 border-red-600 rounded-full"
                          src={user?.image}
                        />
                        {user?.firstName + user?.lastName}
                      </td>
                      <td className="px-6 py-4">{user.ein}</td>
                      <td className="px-6 py-4">{user.company.department}<span className='bg-violet-900 text-white p-1 rounded-full w-2 h-2 ml-1'>+4</span></td>
                      <td className="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis" title={user?.university}>{user?.university}</td>
                      <td align='center'
                        className="px-6 py-4 cursor-pointer"
                        onClick={() => toggleDrawer(user)}
                      >
                       <img src={MenuIcon} height={24} width={24}/>
                      </td>
                    </tr>
                  );
                })
              : <Loader/>}
          </tbody>
        </table>
      </div>
  );
}

export default BottomSection;
