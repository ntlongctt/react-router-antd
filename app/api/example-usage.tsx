import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  getProfileMeUsingGetOptions,
  getProfileMeUsingGetQueryKey,
} from './generated/@tanstack/react-query.gen';
import { client } from './generated/client.gen';
import { env } from '../utils/env';

// Import Shadcn UI components
import { Button } from '../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Input } from '../components/ui/input';

// Create a client
const queryClient = new QueryClient();

// Configure the API client
client.setConfig({
  baseURL: env.apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Sample user data for demonstration
const sampleUsers = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'User' },
  { id: 3, name: 'Mike Johnson', role: 'Editor' },
];

// Example of a profile component
export function UserProfile() {
  // Use the generated query hook
  const profileQuery = useQuery({
    ...getProfileMeUsingGetOptions({
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
        'X-App-Id': 'dev',
        'X-App-Version': '1.0.0',
        'X-Device-Family': 'web',
        'X-Device-Id': 'dev',
        'X-Device-Locale': 'en_US',
        'X-Device-Os': 'web',
        'X-Device-Os-Version': '1.0.0',
      },
    }),
  });

  // Example of how to invalidate a query
  const handleRefresh = () => {
    queryClient.invalidateQueries({
      queryKey: getProfileMeUsingGetQueryKey({
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
          'X-App-Id': 'dev',
          'X-App-Version': '1.0.0',
          'X-Device-Family': 'web',
          'X-Device-Id': 'dev',
          'X-Device-Locale': 'en_US',
          'X-Device-Os': 'web',
          'X-Device-Os-Version': '1.0.0',
        },
      }),
    });
  };

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login with:', username, password);
  };

  if (profileQuery.isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Loading Profile</CardTitle>
            <CardDescription>Please wait while we load your profile information...</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (profileQuery.isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-md border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
            <CardDescription>There was an error loading your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Please try logging in again.</p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <Input
                  id="username"
                  placeholder="Enter your username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const profileData = profileQuery.data?.data;

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
            <CardDescription>Your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Name</p>
              <p>{profileData?.name || 'John Doe'}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Email</p>
              <p>{profileData?.email || 'john.doe@example.com'}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleRefresh} variant="outline">
              Refresh Profile
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>User Directory</CardTitle>
            <CardDescription>View details of other users</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {sampleUsers.map(user => (
                <li key={user.id} className="p-3 hover:bg-accent rounded-md">
                  <Link to={`/users/${user.id}`} className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.role}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Wrap your app with the QueryClientProvider
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProfile />
    </QueryClientProvider>
  );
}

export default App;
