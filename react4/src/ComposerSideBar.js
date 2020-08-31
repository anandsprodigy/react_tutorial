import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const ComposerSideBar = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='Motherboard' />
        Motherboard
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Processor
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        RAM
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Graphics Memory
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Storage
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Cabinet
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='camera' />
        Power Supply
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Application Content</Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default ComposerSideBar;