import { AnnouncementCard, TodosCard } from '../components/Card';
import HorizontalAvatarList from '../components/HorizontalAvatarList';
import MapWithBubbles from '../components/MapWithBubbles';
import Page from '../components/Page';
import ProductMedia from '../components/ProductMedia';
import SupportTicket from '../components/SupportTicket';
import UserProgressTable from '../components/UserProgressTable';
import { IconWidget, NumberWidget } from '../components/Widget';
import API from '../components/API/API'
import {
  avatarsData,
  chartjs,
  productsData,
  supportTicketsData,
  todosData,
  userProgressTableData,
} from '../demos/dashboardPage';
import React from 'react';
import ChartData from '../demos/chartData';
import { Bar, Line } from 'react-chartjs-2';
import {
  MdPersonPin,
  MdRateReview,
  MdShare,
  MdThumbUp,
} from 'react-icons/md';
import InfiniteCalendar from 'react-infinite-calendar';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row
} from 'reactstrap';
import { getColor } from '../utils/colors';
import Data_process from '../process/data_process';
import { randomNum } from '../utils/demos';
const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let label = [];
for (let index = 0; index <= today.getMonth(); index++) {
  label.push(month[index]);
};
class DashboardPage extends React.Component {
  data = new Data_process();
  dataStatistical = {
    sessions: 0,
    pageviews: 0,
    newusers: 0,
    visitors: 0,
    bouncerate: 0,
    avgsessionduration: 0,
    pageviewsIncrease: 0,
    visitorsIncrease: 0,
    newusersIncrease: 0,
    sessionsIncrease: 0,
    bouncerateIncrease: 0,
    avgsessiondurationIncrease: 0
  };
  state = {
    data: null,
    data_statistical: null
  }
  call = new API;
  async componentDidMount() {
    let data = await this.call.callAPI('view', 'get', '').then((response) => {
      this.setState({ data: response.data });
    });
    let data1 = await this.call.callAPI('statistical', 'get', '').then((response) => {
      console.log(response.data)
      this.setState({ data_statistical: response.data });
    });
    window.scrollTo(0, 0);
  }
  render() {
    const rand = () => Math.floor(Math.random() * 255);
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');
    let genData = (() => { })
    let genLineData = (() => { })
    let options='';
    if (this.state.data != null && this.state.data_statistical != null) {
      genData = () => ({
        labels: label,
        datasets: [
          {
            type: 'line',
            label: 'Donator',
            borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            borderWidth: 2,
            fill: false,
            yAxisID: 'y-axis-2',
            data: this.state.data_statistical.chart_donator,
          },
          {
            type: 'bar',
            label: 'Amount donate($)',
            backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: this.state.data_statistical.chart_amount,
            yAxisID: 'y-axis-1',
          },
        ],
      });
  
      options = {
        scales: {
          yAxes: [
            {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-axis-1',
            },
            {
              type: 'linear',
              display: true,
              position: 'right',
              id: 'y-axis-2',
              gridLines: {
                drawOnArea: false,
              },
            },
          ],
        },
      };
      this.dataStatistical = this.data.processStatistics(this.state.data);
      let chartData = this.data.chartData(this.state.data);
      genLineData = (moreData = {}, moreData2 = {}, moreData3 = {}, moreData4 = {}) => {
        return {
          labels: label,
          datasets: [
            {
              label: 'Sesson',
              backgroundColor: getColor('primary'),
              borderColor: getColor('primary'),
              borderWidth: 1,
              data: chartData.session,
              ...moreData,
            },
            {
              label: 'Page views',
              backgroundColor: getColor('secondary'),
              borderColor: getColor('secondary'),
              borderWidth: 1,
              data: chartData.pageView,
              ...moreData2,
            },
            {
              label: 'BOUNCE RATE',
              backgroundColor: getColor('warning'),
              borderColor: getColor('warning'),
              borderWidth: 1,
              data: chartData.bouncerate,
              ...moreData3,
            },
            {
              label: 'Visitor',
              backgroundColor: getColor('info'),
              borderColor: getColor('info'),
              borderWidth: 1,
              data: chartData.visitor,
              ...moreData4,
            },
          ],
        };
      };
    }
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Page views"
              subtitle="This month"
              isIncrease={true}
              number={this.dataStatistical.pageviews}
              color="secondary"
              progress={{
                value: 100,
                persen: this.dataStatistical.pageviewsIncrease
              }}
            />
          </Col>
          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Monthly Visitors"
              subtitle="This month"
              number={this.dataStatistical.visitors}
              isIncrease={true}
              color="secondary"
              progress={{
                value: 100,
                persen: this.dataStatistical.visitorsIncrease
              }}
            />
          </Col>

          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Users"
              subtitle="This month"
              number={this.dataStatistical.users}
              isIncrease={true}
              color="secondary"
              progress={{
                value: 100,
                persen: this.dataStatistical.usersIncrease
              }}
            />
          </Col>

          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="New Users"
              subtitle="This month"
              number={this.dataStatistical.newusers}
              isIncrease={true}
              color="secondary"
              progress={{
                value: 100,
                persen: this.dataStatistical.newusersIncrease
              }}
            />
          </Col>

          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Bounce Rate"
              subtitle="This month"
              number={this.dataStatistical.bouncerate}
              isIncrease={true}
              color="secondary"
              progress={{
                value: 100,
                persen: this.dataStatistical.bouncerateIncrease
              }}
            />
          </Col>
          <Col lg={4} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Sessions"
              subtitle="This month"
              number={this.dataStatistical.sessions}
              isIncrease={true}
              color="secondary"
              progress={{
                value: 100,
                persen: this.dataStatistical.sessionsIncrease
              }}
            />
          </Col>
          {
            this.state.data_statistical != null &&
            <Col lg={4} md={6} sm={6} xs={12}>
              <NumberWidget
                title="Amount donate"
                subtitle="This month"
                number={this.state.data_statistical.count.count_amount}
                isIncrease={true}
                color="secondary"
                progress={{
                  value: 100,
                  persen: parseInt(this.state.data_statistical.count.count_amount) - parseInt(this.state.data_statistical.count.count_amount_last)
                }}
              />
            </Col>
          }
          {this.state.data_statistical!=null&&
          <Col lg={4} md={6} sm={6} xs={12}>
          <NumberWidget
            title="Donator"
            subtitle="This month"
            number={'$'+this.state.data_statistical.count.count_donator}
            isIncrease={true}
            color="secondary"
            progress={{
              value: 100,
              persen: parseInt(this.state.data_statistical.count.count_donator) - parseInt(this.state.data_statistical.count.count_donator_last)
            }}
          />
        </Col>}
        </Row>

        <Row>
          <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Website Statistics{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                {this.state.data != null && <Line data={genLineData({ fill: false }, { fill: false }, { fill: false }, { fill: false })} />}
              </CardBody>
            </Card>
          </Col>
          <Col md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Donate Statistics{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                {this.state.data_statistical!=null&&<Bar data={genData} options={options} />}
              </CardBody>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col lg="4" md="12" sm="12" xs="12">
            <InfiniteCalendar
              selected={today}
              minDate={lastWeek}
              width="100%"
              theme={{
                accentColor: primaryColor,
                floatingNav: {
                  background: secondaryColor,
                  chevron: primaryColor,
                  color: '#FFF',
                },
                headerColor: primaryColor,
                selectionColor: secondaryColor,
                textColor: {
                  active: '#FFF',
                  default: '#333',
                },
                todayColor: secondaryColor,
                weekdayColor: primaryColor,
              }}
            />
          </Col>

          <Col lg="8" md="12" sm="12" xs="12">
            <Card inverse className="bg-gradient-primary">
              <CardHeader className="bg-gradient-primary">
                Passerelles numeriques map
              </CardHeader>
              <CardBody>
                <MapWithBubbles />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
