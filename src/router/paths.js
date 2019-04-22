import StarContractDetails from '../views/StarContractDetails.vue'
import StarContractSummary from '../views/StarContractSummary.vue'
import PurchaseStarContract from '../views/PurchaseStarContract.vue'
import MyStarTeam from '../views/MyStarTeam.vue'
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/user',
    name: 'User',
    view: 'User'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/registration',
    name: 'Registration',
    view: 'Registration'
  },
  {
    path: '/sign-up',
    name: 'Sign IUP',
    view: 'SignUp'
  },
  {
    path: '/courses',
    name: 'Courses',
    view: 'Courses'
  },
  {
    path: '/employees',
    name: 'Employees',
    view: 'Employees'
  },
  {
    path: '/starcontract',
    name: 'Star Contracts',
    view: 'StarContracts',

    children: [
      {
        path: 'summary',
        component: StarContractSummary,
        name: 'Star Contract Summary'
        // view: 'StarContractSummary'
      },
      {
        path: 'details',
        component: StarContractDetails,
        name: 'Star Contract Details'
        // view: 'StarContractDetails'
      },
      {
        path: 'purchase',
        component: PurchaseStarContract,
        name: 'Purchase Star Contract'
        // view: 'PurchaseStarContract'
      },
      {
        path: 'mystarteam',
        component: MyStarTeam,
        name: 'My Star Team'
        // view: 'MyStarTeam'
      }
    ]
  },
  {
    path: '/starwallet',
    name: 'Star Wallet',
    view: 'StarWallet'
  },
  {
    path: '/starevents',
    name: 'Star Events',
    view: 'StarEvents'
  },
  {
    path: '/starmatrix',
    name: 'Star Matrix',
    view: 'StarMatrix'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/login',
    name: 'Login',
    view: 'Login'
  },
  {
    path: '/register',
    name: 'Register',
    view: 'Register'
  },
  {
    path: '/admin',
    name: 'Admin',
    view: 'Admin'
  }
]
