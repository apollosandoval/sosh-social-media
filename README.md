# sosh-social-media

## Proposal

- Sosh is social media, reimagined...by John. It's an ambitious project designed to test the limits of man, machine, caffeine, and caffeine-machine-man. It's big, I want to see if I can build it in a week to within a presentable standard in the spirit of 'Deploy early and often'.
- The user of this application will be anyone who wants to take a good thing, like instant messanger, and add layers of complexity and navigation. It's like AIM, but with client-side routing.
- Users of the application can expect to see messages and status updates in real-time from their community of friends, and also that one guy you met at a party once three years ago. Hey! looks like they're having a kid!
- In order to consume the data that is being output to a user they will need a community of friends interacting via the platform to generate messages, status updates, and other content. Or like three bots; yeah, three bots would be good too.
- Sosh will be developed with the use of Vue, Vuex, and Vue-router for the client-side content. Backend will be developed with Express and PostgreSQL.

## Component Tree

![component tree](./images/component-tree.png)

## User stories

### Landing Page

- As a user, I see a form that will allow me to either log in or sign up

### Dashboard Page

#### Layout

- As a user, I see a form to add a new status at the top of the page
- As a user, below the new status form, I see a list of statuses from all of my friends
- As a user, I see the page in three sections. The side-nav menu, the main status area, and the misc are, respectively, from left to right

#### Add Status Form

- As a user, I see an input field, as well as a submit button
- As a user, when successfully add a new status, I see a message shown below the form stating that I have successfully added a new status
- As a user, if the new status input field is empty, the button to submit the form is disabled

#### Individual Status

- As a user, in the left section, I see the status owner’s profile photo
- As a user, in the middle section, I see the status owner’s name above the status content
- As a user, in the right section, I see the date/time that the status was posted by the status owner
- As a user, if I click on the status owner’s name, it will take me to their profile page
- As a user, if I would like to see the comments left on that person’s status, I would click the “View Comments” button/link/whatever
- As a user, I am able to leave comments on my friends’ statuses
- As a user, if I want to leave a comment on a friend’s status, I will fill out the input and submit button at the bottom on the “View Comments” section
- As a user, if the new comment input field is empty, the submit button is disabled

### Conversations Page

#### Layout

- As a user, I see the page in three sections. The conversation list, the conversation view, and the new conversation form, respectively, from left to right

#### Conversation List and Conversation List Item

- As a user, I see each conversation listed from top to bottom, sorted by most-recent first
- As a user, in each conversation list item, I see a thumbnail of the profile photo, the friend’s name, and a small snippet of the most recent message, respectively, from left to right
- As a user, when I click on the conversation list item, the conversation shows in the conversation view section to the right

#### Conversation View and Message

- As a user, I see each conversation message listed from top to bottom, the most recent message being at the bottom and each previous message being visible above that one
- As a user, in each conversation message, I see a profile photo and the message content beside each other
- As a user, at the bottom of the conversation view, there is an input and a submit button that will allow me to add a message to the list
- As a user, when the input field for the new message form is empty, the submit button is disabled

#### New Conversation Form

- As a user, I can see two fields. The friend I am starting the conversation with and the message I would like to send
- As a user, I can only start conversations with friends, so when I type someone’s name in the friend search field, it will only search the people that I am friends with
- As a user, when any of the input fields on the form are empty or invalid for some reason, the submit button is disabled

### Manage Friends Page

#### Friends List

- As a user, I can see the list of friend sorted from top to bottom, most recent friend added at the top
- As a user, I can search for specific friends using the search bar located above the list of friends
- As a user, if I search for a friend that is an existing user, but is not my friend yet, a link/button/whatever will appear asking if I would like to send a friend request to that person
- As a user if I search for a friend that is not an existing user, a link/button/whatever will appear asking if I would like to send an email invite to that person to sign up for Sosh

#### Friends List Item

- As a user, I can see three sections: The friend’s profile photo, the friend’s name and added date, and the unfriend button, respectively from left to right
- As a user, I am able to click on a friend’s name to route me to their profile page
- As a user, I am able to unfriend someone via a button on the right side of the friends list item

### Friends/User Profile Page

#### Layout

- As a user, I can see three sections, organized vertically
- As a user, in the top section, I see that user's banner, profile picture, and name
- As a user, if I am not friends with that user, I see a button on the bottom of the top section that asks me if I would like to send that user a friend request
- As a user, if I am friends with that user, I see a button on the bottom of the top section that asks me if I would like to unfriend that user
- As a user, if I am friends with that user, I see a button on the bottom of the top section that asks me if I would like to start or continue a conversation with that user
- As a user, in the middle section, I see the that user's basic info
- As a user, in the bottom section, I see a list of that user’s statuses

### User Settings Page

#### Layout

- As a user, I can see three sections containing corresponding inputs for section from the profile page from top to bottom
- As a user, in the top section, I can add/update a banner photo, my profile photo, and my visible name
- As a user, in the middle section, I can update all of the basic info
- As a user, in the bottom section, I can update my email address or delete my account
