import react from 'react';
import {Show} from '@clerk/react';

const Dashboard = () => {
    return (
        <Show when="signed-in">
            <div>
                <h1>This is  the Dashboard</h1>
            </div>
        </Show>
    );
};

export default Dashboard;