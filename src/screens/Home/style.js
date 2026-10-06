import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  heading: {
    marginTop: 60,
    marginLeft: 38,
    // marginRight : 114,
  },

  headingTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  hiText: {
    fontSize: 25,
    fontWeight: 600,
  },

  morningText: {
    fontSize: 16,
  },

  bell: {
    height: 35,
    width: 35,
    marginRight: 30,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
  },

  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 115,
    marginTop: 41,
  },

  balanceSection: {
    flex: 1,
  },

  wallet: {
    width: 20,
    height: 20,
  },

  moneyTransaction: {
    width: 25,
    height: 25,
  },

  divider: {
    width: 1,
    height: 55,
    backgroundColor: 'white',
    marginHorizontal: 25,
  },

  titleRow: {
    flexDirection: 'row',
  },

  title: {
    fontSize: 18,
    marginLeft: 3,
  },

  balance: {
    fontSize: 28,
    marginTop: 8,
    fontWeight: 'bold',
    color: '#F1FFF3',
  },

  expense: {
    fontSize: 28,
    marginTop: 8,
    fontWeight: 'bold',
    color: '#0068FF',
  },

  expenseBar: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    width: 330,
    height: 30,
    backgroundColor: '#052224',
    borderRadius: 50,
    alignItems: 'center',
  },

  percent: {
    color: 'white',
    fontSize: 14,
    marginRight: 8,
  },

  totalExpense: {
    backgroundColor: '#F1FFF3',
    width: 249,
    borderRadius: 50,
    marginLeft: 13,
    height: 30,
  },

  amount: {
    padding: 5,
    marginLeft: 145,
    fontSize: 15,
    fontWeight: 500,
    marginTop: 1,
  },

  checkContainer: {
    flexDirection: 'row',
    marginTop: 13,
  },

  check: {
    width: 17,
    height: 17,
    marginTop: 3,
    marginRight: 7,
  },

  checkText: {
    fontSize: 18,
    marginBottom: 32,
  },

  home: {
    flex: 1,
    backgroundColor: '#F1FFF3',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },

  homeContent: {
    // paddingTop : 36,
    paddingBottom: 40,
  },

  detailCard: {
    flexDirection: 'row',
    backgroundColor: '#00D09E',
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderRadius: 40,
    marginHorizontal: 23,
    marginTop: 36,
    alignItems: 'center',
  },

  goalSection: {
    // flex : 0.1,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  car: {
    width: 75,
    height: 75,
    borderWidth: 3,
    borderRadius: 50,
    padding: 10,
    borderLeftColor: 'white',
    borderBottomColor: 'white',
    borderRightColor: '#0068FF',
    borderTopColor: '#0068FF',
    // marginLeft: 32,
  },

  carText: {
    fontSize: 16,
    marginTop: 7,
    textAlign: 'center',
  },

  secondDivider: {
    width: 2,
    height: 100,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },

  revenueFood: {
    flex: 1,
    marginLeft: 15,
  },

  revenue: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  revenueInfo: {
    flex: 1,
    marginLeft: 10,
  },

  moneyStack: {
    width: 32,
    height: 36,
  },

  revenueText: {
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 3,
  },

  revenueBalance: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  thirdDivider: {
    height: 2,
    backgroundColor: 'white',
    marginTop: 12,
    marginBottom: 12,
  },

  food: {
    flexDirection: 'row',
  },

  foodInfo: {
    marginLeft: 10,
    flex: 1,
  },

  foodImage: {
    width: 32,
    height: 36,
  },

  foodText: {
    fontSize: 15,
    fontWeight: 400,
    marginBottom: 3,
  },

  foodBalance: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0068FF',
  },

  // Tabs

  tabContainer: {
    flexDirection: 'row',
    width: '88%',
    height: 70,
    backgroundColor: '#DFF7E2',
    borderRadius: 40,
    marginLeft: 23,
    marginTop: 26,
    padding: 10,
  },

  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedTab: {
    backgroundColor: '#00D09E',
    borderRadius: 20,
  },

  tabData: {
    marginLeft: 25,
    marginTop: 24,
    width: '88%',
    marginBottom: 60,
  },

  tabText: {
    fontSize: 19,
  },

  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },

  salaryImage: {
    width: 50,
    height: 50,
    marginRight: 16,
    backgroundColor: '#0068FF',
    padding: 7,
    borderRadius: 20,
  },

  superMarketImage: {
    width: 50,
    height: 50,
    marginRight: 16,
    backgroundColor: '#3299FF',
    padding: 7,
    borderRadius: 20,
  },

  rentImage: {
    width: 50,
    height: 50,
    marginRight: 16,
    backgroundColor: '#0068FF',
    padding: 7,
    borderRadius: 20,
  },

  divider: {
    width: 2,
    height: 35,
    backgroundColor: '#00D09E',
    marginHorizontal: 14,
  },

  salaryHead: {
    fontSize: 16,
    fontWeight: 500,
  },

  dateTime: {
    fontSize: 14,
    fontWeight: 600,
    color: '#0068FF',
    marginTop: 3,
  },

  centerInfo: {
    fontSize: 14,
  },

  salaryAmount: {
    fontSize: 18,
    fontWeight: 600,
  },

  tabAmount: {
    fontSize: 18,
    fontWeight: 600,
    color: '#0068FF',
  },

  superMarketInfo: {
    fontSize: 15,
    marginLeft: 7,
  },

  rent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  transactionInfo: {
    width : '32%',
  },

  categoryRow : {
    width : '14%',
    alignItems : 'center',
  },

  amountRow : {
    width : '23%',
    // alignItems : 'center',
  },


});

export default style;
