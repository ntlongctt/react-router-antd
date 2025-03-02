import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function UserDetails() {
  const { userId } = useParams<{ userId: string }>();
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState<null | { name: string; email: string; role: string }>(
    null
  );

  React.useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setUser({
        name: `User ${userId}`,
        email: `user${userId}@example.com`,
        role: userId === '1' ? 'Admin' : 'User',
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>User Details</CardTitle>
          <CardDescription>Viewing details for user ID: {userId}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {user ? (
            <>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Name</p>
                <p>{user.name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p>{user.email}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">Role</p>
                <p>{user.role}</p>
              </div>
            </>
          ) : (
            <p>User not found</p>
          )}
        </CardContent>
        <CardFooter>
          <Button variant="outline" asChild>
            <Link to="/profile">Back to Profile</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
