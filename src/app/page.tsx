"use client"
import Sidebar from "../components/ui/sidebar/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { useToast } from "../hooks/use-toast"
import StakeInput from "../components/ui/StakeInput"

export default function Home() {
  const { toast } = useToast()
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <main style={{
        flexGrow: 1,
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#f7f7f7'
      }}>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Card style={{ width: '60%', marginLeft: '18%', padding: '1.5rem', marginTop: '8%', marginBottom: '6%' }}>
            <CardHeader>
              <CardTitle style={{ fontSize: '3rem' }}>Defi Dapp</CardTitle>
              <CardDescription style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Staking Module</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="stake" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Stake Amount</label>
                  <StakeInput />
                </div>

                <div>
                  <label htmlFor="bond" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Bond Amount</label>
                  <StakeInput />
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                  <Button
                    style={{
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      padding: '1.5rem 2rem',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}
                    onClick={() => {
                      toast({
                        title: "Transaction Success!",
                        description: "The block has confirmed.",
                      })
                    }}
                  >
                    Stake
                  </Button>
                  <Button
                    style={{
                      backgroundColor: '#007BFF',
                      color: 'white',
                      padding: '1.5rem 2rem',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '1rem'
                    }}
                    onClick={() => {
                      toast({
                        title: "Transaction Success!",
                        description: "The block has confirmed.",
                      })
                    }}
                  >
                    Bond
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
