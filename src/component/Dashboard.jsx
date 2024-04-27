import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import './BlurBg.css';
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

function Dashboard() {
  const [profiles, setProfiles] = useState([

  ]);

  // useEffect(() => {
  //   // Fetch data from Google Sheets API
  //   fetch('YOUR_GOOGLE_SHEETS_API_ENDPOINT')
  //     .then(response => response.json())
  //     .then(data => setProfiles(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleNewProposal = () => {
    window.location.href = 'https://forms.gle/K2NYbe8HXZoufcxf8';
  };

  return (
    <div className="blurry-bg">
      <div className="dashboard-container">
        <Box p={4} className="dashboard-box">
          <Heading as="h2" size="lg" className="dashboard-heading">
            Dashboard
          </Heading>

          <Table variant="simple" className="dashboard-table">
            <Thead>
              <Tr>
                <Th>Products</Th>
                <Th>Domain</Th>
                <Th>GST No.</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Address</Th>
              </Tr>
            </Thead>

            <Tbody>
              {profiles.map((profile, index) => (
                <Tr key={index}>
                  <Td>{profile.products.join(', ')}</Td>
                  <Td>{profile.domain}</Td>
                  <Td>{profile.gstNo}</Td>
                  <Td>{profile.email}</Td>
                  <Td>{profile.phone}</Td>
                  <Td>{profile.address}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <VStack mt={4} className="proposal-section">
            <Button
              mt={4}
              colorScheme="blue"
              rightIcon={<Icon as={AddIcon} />}
              onClick={handleNewProposal}
              className="new-proposal-button"
            >
              New Proposal
            </Button>
          </VStack>
        </Box>
      </div>
    </div>
  );
}

export default Dashboard;