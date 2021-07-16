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
  CardDeck,
  CardGroup,
  CardHeader,
  Col,
  Row
} from 'reactstrap';
import { getColor } from '../utils/colors';
import Data_process from '../process/data_process';

const today = new Date();
const lastWeek = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7,
);


class DashboardPage extends React.Component {
  data=new Data_process();
  dataStatistical = {
    sessions: 0,
    pageviews: 0,
    newusers: 0,
    visitors: 0,
    bouncerate: 0,
    avgsessionduration: 0,
    pageviewsIncrease: 0,
    visitorsIncrease: 0,
    newusersIncrease:0,
    sessionsIncrease:0,
    bouncerateIncrease:0,
    avgsessiondurationIncrease:0
  };
  dataChart={
    sessionsChart:new ChartData(),
    pageViewChart:new ChartData(),
    visitorChart:new ChartData(),
    bouncerateChart:new ChartData()
  }
  state = {
    data: null
  }
  call=new API;
  async componentDidMount() {
    let data = await this.call.callAPI('view', 'get', '').then((response) => {
      this.setState({ data: response.data });
    });
    
    window.scrollTo(0, 0);
  }
  render() {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');

    if (this.state.data != null) {
      this.dataStatistical=this.data.processStatistics(this.state.data);
      let chartData=this.data.chartData(this.state.data);
      this.dataChart.sessionsChart.chartjs.line.data.datasets[0].data=chartData.session;
      this.dataChart.sessionsChart.chartjs.line.data.datasets[0].backgroundColor='#22bbea';
      this.dataChart.sessionsChart.chartjs.line.data.datasets[0].borderColor='#22bbea';
      this.dataChart.pageViewChart.chartjs.line.data.datasets[0].data=chartData.pageView;
      this.dataChart.pageViewChart.chartjs.line.data.datasets[0].backgroundColor='#ff9933';
      this.dataChart.pageViewChart.chartjs.line.data.datasets[0].borderColor='#ff9933';
      this.dataChart.visitorChart.chartjs.line.data.datasets[0].data=chartData.visitor;
      this.dataChart.bouncerateChart.chartjs.line.data.datasets[0].data=chartData.bouncerate;
      this.dataChart.bouncerateChart.chartjs.line.data.datasets[0].backgroundColor='#fc5c7d';
      this.dataChart.bouncerateChart.chartjs.line.data.datasets[0].borderColor='#fc5c7d';
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
        </Row>

        <Row>
          <Col lg="6" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Page views{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={this.dataChart.pageViewChart.chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>
         
          <Col lg="6" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Sessions{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={this.dataChart.sessionsChart.chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                Visitors{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={this.dataChart.visitorChart.chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>
         
          <Col lg="6" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
              Bounce rate{' '}
                <small className="text-muted text-capitalize">This year</small>
              </CardHeader>
              <CardBody>
                <Line data={this.dataChart.bouncerateChart.chartjs.line.data} options={chartjs.line.options} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <CardGroup style={{ marginBottom: '1rem' }}>
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdThumbUp}
            title="50+ Likes"
            subtitle="People you like"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdRateReview}
            title="10+ Reviews"
            subtitle="New Reviews"
          />
          <IconWidget
            bgColor="white"
            inverse={false}
            icon={MdShare}
            title="30+ Shares"
            subtitle="New Shares"
          />
        </CardGroup>

        <Row>
          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>New Products</CardHeader>
              <CardBody>
                {productsData.map(
                  ({ id, image, title, description, right }) => (
                    <ProductMedia
                      key={id}
                      image={image}
                      title={title}
                      description={description}
                      right={right}
                    />
                  ),
                )}
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>
              <CardHeader>New Users</CardHeader>
              <CardBody>
                <UserProgressTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'name',
                    'date',
                    'participation',
                    '%',
                  ]}
                  usersData={userProgressTableData}
                />
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
                Map with bubbles
              </CardHeader>
              <CardBody>
                <MapWithBubbles />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <CardDeck style={{ marginBottom: '1rem' }}>
          <Card body style={{ overflowX: 'auto', 'paddingBottom': '15px', 'height': 'fit-content', 'paddingTop': 'inherit' }}>
            <HorizontalAvatarList
              avatars={avatarsData}
              avatarProps={{ size: 50 }}
            />
          </Card>

          <Card body style={{ overflowX: 'auto', 'paddingBottom': '15px', 'height': 'fit-content', 'paddingTop': 'inherit' }}>
            <HorizontalAvatarList
              avatars={avatarsData}
              avatarProps={{ size: 50 }}
              reversed
            />
          </Card>
        </CardDeck>

        <Row>
          <Col lg="4" md="12" sm="12" xs="12">
            <AnnouncementCard
              color="gradient-secondary"
              header="Announcement"
              avatarSize={60}
              name="Jamy"
              date="1 hour ago"
              text="Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy euismod tinciduntut laoreet doloremagna"
              buttonProps={{
                children: 'show',
              }}
              style={{ height: 500 }}
            />
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Support Tickets</span>
                  <Button>
                    <small>View All</small>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {supportTicketsData.map(supportTicket => (
                  <SupportTicket key={supportTicket.id} {...supportTicket} />
                ))}
              </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="12" sm="12" xs="12">
            <TodosCard todos={todosData} />
          </Col>
        </Row>
      </Page>
    );
  }
}
export default DashboardPage;
