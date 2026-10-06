import React, { useState } from 'react';
import { ScrollView, Text, View, Image, Pressable } from 'react-native';
import styles from './style';
import bell from '../../assets/images/bell.png';
import forkSpoon from '../../assets/images/fork-and-spoon.png';
import house from '../../assets/images/house.png';
import moneyStack from '../../assets/images/money-stack.png';
import moneyTransaction from '../../assets/images/money-transaction.png';
import car from '../../assets/images/car.png';
import salary from '../../assets/images/salary.png';
import superMarket from '../../assets/images/supermarket.png';
import wallet from '../../assets/images/wallet.png';
import check from '../../assets/images/check.png';
import { useNavigation } from '@react-navigation/native';

const dashBoard = () => {
  const [selectedTab, setSelectedTab] = useState('Daily');
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: '#00D09E', flex: 1 }}>
      <View style={styles.heading}>
        <View style={styles.headingTitle}>
          <Text style={styles.hiText}>Hi, Welcome back</Text>

        <Pressable onPress={() => navigation.navigate('Notifications')} >
          <Image source={bell} style={styles.bell} />
          </Pressable>
          
        </View>
        <Text style={styles.morningText}>Good Morning</Text>
        // Expense Section
        <View style={styles.balanceContainer}>
          <View>
            <View style={styles.titleRow}>
              <Image source={wallet} style={styles.wallet} />
              <Text style={styles.title}>Total Balance</Text>
            </View>

            <Text style={styles.balance}>$7,783.00</Text>
          </View>

          <View style={styles.divider} />

          <View>
            <View style={styles.titleRow}>
              <Image
                source={moneyTransaction}
                style={styles.moneyTransaction}
              />
              <Text style={styles.title}>Total Expense</Text>
            </View>

            <Text style={styles.expense}>-$1,187.40</Text>
          </View>
        </View>
        // Expense Bar
        <View style={styles.expenseBar}>
          <Text style={styles.percent}>30%</Text>

          <View style={styles.totalExpense}>
            <Text style={styles.amount}>$20,000.00</Text>
          </View>
        </View>
        <View style={styles.checkContainer}>
          <Image source={check} style={styles.check} />
          <Text style={styles.checkText}>
            30% Of Your Expenses, Looks Good.
          </Text>
        </View>
      </View>
      // Body
      <View style={styles.home}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.homeContent}
        >
          <View style={styles.detailCard}>
            <View style={styles.goalSection}>
              <Image source={car} style={styles.car} />
              <Text style={styles.carText}>Savings On Goals</Text>
            </View>

            <View style={styles.secondDivider} />

            <View style={styles.revenueFood}>
              <View style={styles.revenue}>
                <Image source={moneyStack} style={styles.moneyStack} />

                <View style={styles.revenueInfo}>
                  <Text style={styles.revenueText}>Revenue Last Week</Text>
                  <Text style={styles.revenueBalance}>$4.000.00</Text>
                </View>
              </View>

              <View style={styles.thirdDivider} />

              <View style={styles.food}>
                <Image source={forkSpoon} style={styles.foodImage} />

                <View style={styles.foodInfo}>
                  <Text style={styles.foodText}>Food Last Week</Text>
                  <Text style={styles.foodBalance}>-$100.00</Text>
                </View>
              </View>
            </View>
          </View>
          // Tabs
          <View style={styles.tabContainer}>
            <Pressable
              style={[
                styles.tab,
                selectedTab === 'Daily' && styles.selectedTab,
              ]}
              onPress={() => setSelectedTab('Daily')}
            >
              <Text style={styles.tabText}>Daily</Text>
            </Pressable>

            <Pressable
              style={[
                styles.tab,
                selectedTab === 'Weekly' && styles.selectedTab,
              ]}
              onPress={() => setSelectedTab('Weekly')}
            >
              <Text style={styles.tabText}>Weekly</Text>
            </Pressable>

            <Pressable
              style={[
                styles.tab,
                selectedTab === 'Monthly' && styles.selectedTab,
              ]}
              onPress={() => setSelectedTab('Monthly')}
            >
              <Text style={styles.tabText}>Monthly</Text>
            </Pressable>
          </View>


          <View style={styles.tabData}>

            // Daily


            {selectedTab === 'Daily' && (
              <View>
                <View style={styles.transactionRow}>
                  <Image source={salary} style={styles.salaryImage} />

                  <View style={styles.transactionInfo}>
                    <Text style={styles.salaryHead}>Salary</Text>
                    <Text 
                        style={styles.dateTime}
                        numberOfLines={1}
                    >
                        09:00 - Sept 30
                    </Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.categoryRow}>
                    <Text style={styles.centerInfo}>Income</Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.amountRow}>
                    <Text style={styles.salaryAmount}>$1500.00</Text>
                  </View>
                </View>

                <View style={styles.transactionRow}>
                  <Image source={superMarket} style={styles.superMarketImage} />

                  <View style={styles.transactionInfo}>
                    <Text style={styles.salaryHead}>Breakfast</Text>
                    <Text 
                        style={styles.dateTime}
                        numberOfLines={1}
                    >
                        08:15 - Sept 30
                    </Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.categoryRow}>
                    <Text style={styles.centerInfo}>Food</Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.amountRow}>
                    <Text style={styles.tabAmount}>-$12.50</Text>
                  </View>
                </View>

                <View style={styles.transactionRow}>
                  <Image source={house} style={styles.superMarketImage} />

                  <View style={styles.transactionInfo}>
                    <Text style={styles.salaryHead}>Rent</Text>
                    <Text 
                        style={styles.dateTime}
                        numberOfLines={1}
                    >
                        08:15 - Sept 30
                    </Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.categoryRow}>
                    <Text style={styles.centerInfo}>Rent</Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.amountRow}>
                    <Text style={styles.tabAmount}>-$500.00</Text>
                  </View>
                </View>
              </View>
            )}



            // Weekly

            {selectedTab === 'Weekly' && (
              <View>
                <View style={styles.transactionRow}>
                  <Image source={salary} style={styles.salaryImage} />

                  <View style={styles.transactionInfo}>
                    <Text style={styles.salaryHead}>Salary</Text>
                    <Text 
                        style={styles.dateTime}
                        numberOfLines={1}
                    >
                        09:00 - Sept 30
                    </Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.categoryRow}>
                    <Text style={styles.centerInfo}>Income</Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.amountRow}>
                    <Text style={styles.salaryAmount}>$1500.00</Text>
                  </View>
                </View>

                <View style={styles.transactionRow}>
                  <Image source={superMarket} style={styles.superMarketImage} />

                  <View style={styles.transactionInfo}>
                    <Text style={styles.salaryHead}>Breakfast</Text>
                    <Text 
                        style={styles.dateTime}
                        numberOfLines={1}
                    >
                        08:15 - Sept 30
                    </Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.categoryRow}>
                    <Text style={styles.centerInfo}>Food</Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.amountRow}>
                    <Text style={styles.tabAmount}>-$12.50</Text>
                  </View>
                </View>

                <View style={styles.transactionRow}>
                  <Image source={house} style={styles.superMarketImage} />

                  <View style={styles.transactionInfo}>
                    <Text style={styles.salaryHead}>Rent</Text>
                    <Text 
                        style={styles.dateTime}
                        numberOfLines={1}
                    >
                        08:15 - Sept 30
                    </Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.categoryRow}>
                    <Text style={styles.centerInfo}>Rent</Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.amountRow}>
                    <Text style={styles.tabAmount}>-$500.00</Text>
                  </View>
                </View>
              </View>
            )}



            // Monthly

            {selectedTab === 'Monthly' && (
              <View>
                <View style={styles.transactionRow}>
                  <Image source={salary} style={styles.salaryImage} />

                  <View style={styles.transactionInfo}>
                    <Text style={styles.salaryHead}>Salary</Text>
                    <Text 
                        style={styles.dateTime}
                        numberOfLines={1}
                    >
                        09:00 - Sept 30
                    </Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.categoryRow}>
                    <Text style={styles.centerInfo}>Income</Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.amountRow}>
                    <Text style={styles.salaryAmount}>$1500.00</Text>
                  </View>
                </View>

                <View style={styles.transactionRow}>
                  <Image source={superMarket} style={styles.superMarketImage} />

                  <View style={styles.transactionInfo}>
                    <Text style={styles.salaryHead}>Breakfast</Text>
                    <Text 
                        style={styles.dateTime}
                        numberOfLines={1}
                    >
                        08:15 - Sept 30
                    </Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.categoryRow}>
                    <Text style={styles.centerInfo}>Food</Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.amountRow}>
                    <Text style={styles.tabAmount}>-$12.50</Text>
                  </View>
                </View>

                <View style={styles.transactionRow}>
                  <Image source={house} style={styles.superMarketImage} />

                  <View style={styles.transactionInfo}>
                    <Text style={styles.salaryHead}>Rent</Text>
                    <Text 
                        style={styles.dateTime}
                        numberOfLines={1}
                    >
                        08:15 - Sept 30
                    </Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.categoryRow}>
                    <Text style={styles.centerInfo}>Rent</Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.amountRow}>
                    <Text style={styles.tabAmount}>-$500.00</Text>
                  </View>
                </View>
              </View>
            )}


          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default dashBoard;
