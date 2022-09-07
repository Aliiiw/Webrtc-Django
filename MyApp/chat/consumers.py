from channels.generic.websocket import AsyncWebsocketConsumer
import json

class ChatConsumer(AsyncWebsocketConsumer):
    
    async def connect(self):
        self.room_group_name = 'Test-Room'
        
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        
        await self.accept()
        
          
    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )
        print("Discconected!")
        
        
    async def receive(self, dict_data):
        receive_dict = json.loads(dict_data)
        message = receive_dict['message']